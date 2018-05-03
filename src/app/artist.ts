import { Event } from './event';

export interface Artist {
    name: string;
    facebookUrl: string;
    imageUrl: string;
    upcoming_event_count: Number;
    events: Event[];
}
