import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCalendarStarIcon],svg[streamline-calendar-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2M3.5.5v3m7-3v3M3.5 2h5"></svg:path><svg:path d="m7.249 4.652l.836 1.683a.26.26 0 0 0 .214.156l1.858.282a.282.282 0 0 1 .156.487L8.941 8.563a.27.27 0 0 0 0 .253l.263 1.848a.282.282 0 0 1-.418.302l-1.654-.876a.33.33 0 0 0-.272 0l-1.654.876a.283.283 0 0 1-.418-.302l.31-1.848a.27.27 0 0 0-.048-.253L3.68 7.25a.282.282 0 0 1 .155-.477l1.858-.272a.26.26 0 0 0 .214-.156l.837-1.683a.282.282 0 0 1 .506-.01Z"></svg:path></svg:g>`,
})
export class StreamlineCalendarStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
