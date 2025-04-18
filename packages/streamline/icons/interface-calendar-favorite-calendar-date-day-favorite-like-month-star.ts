import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarFavoriteCalendarDateDayFavoriteLikeMonthStarIcon],svg[streamline-interface-calendar-favorite-calendar-date-day-favorite-like-month-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M6.45 5.37a.59.59 0 0 1 1.1 0L8.19 7H9.9a.6.6 0 0 1 .4 1L8.79 9.36l.64 1.28a.58.58 0 0 1-.12.69a.61.61 0 0 1-.7.1L7 10.55l-1.61.88a.61.61 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28L3.7 8a.6.6 0 0 1 .4-1h1.71Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarFavoriteCalendarDateDayFavoriteLikeMonthStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
