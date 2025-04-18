import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashFillIcon],svg[ph-calendar-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48v139.57a4 4 0 0 1-7 2.7L116.8 80H208V48h-24v8a8 8 0 0 1-8.52 8a8.18 8.18 0 0 1-7.48-8.27V48H87.71l-8.46-9.31a4 4 0 0 1 3-6.69H168v-8a8 8 0 0 1 8.52-8a8.18 8.18 0 0 1 7.48 8.27V32h24a16 16 0 0 1 16 16m-10.08 162.62A8 8 0 0 1 208 224H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16a8 8 0 0 1 5.93 2.62ZM73.55 80L48 51.89V80Z"></svg:path>`,
})
export class PhCalendarSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
