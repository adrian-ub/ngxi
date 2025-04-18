import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTetherfiIcon],svg[arcticons-tetherfi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.75 42.61C41.18 38.9 45.5 31.95 45.5 24c0-11.87-9.63-21.5-21.5-21.5S2.5 12.13 2.5 24c0 7.95 4.32 14.9 10.75 18.61"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.63 35.47c3.96-2.29 6.62-6.57 6.62-11.47c0-7.32-5.93-13.25-13.25-13.25S10.75 16.68 10.75 24c0 4.9 2.66 9.18 6.62 11.47"></svg:path><svg:circle cx="24" cy="24" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTetherfiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
