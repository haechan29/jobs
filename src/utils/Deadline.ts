import dayjs, { Dayjs } from 'dayjs';

export class Deadline {
    date: Dayjs | null;

    constructor(value: string) {
        if (value === '상시채용') {
            this.date = null
        } else {
            this.date = dayjs(value);
        }
    }

    compareTo(other: Deadline): number {
        const od = other.getDaysLeft()
        const td = this.getDaysLeft()
        if (od !== null && od < 0) return -1;
        if (td !== null && td < 0) return 1;

        if (other.date === null) return -1;
        if (this.date === null) return 1;
        return this.date.diff(other.date);
    }

    getDaysLeft(reference: Dayjs = dayjs()): number | null {
        return this.date?.startOf('day').diff(reference.startOf('day'), 'day') ?? null;
    }

    getFormatted(): string {
        const daysLeft = this.getDaysLeft()
        if (daysLeft === null) return '상시채용';
        if (daysLeft > 0) return `${daysLeft}일`;
        if (daysLeft === 0) return '오늘';
        return '마감';
    }
};