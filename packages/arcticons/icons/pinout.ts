import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPinoutIcon],svg[arcticons-pinout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:path d="M41.304 11.24c-8.7 12.268-19.65 19.83-35.352 24.444m38.637-17.876c-10.321 16.446-21.942 20.09-33.976 23.016"></svg:path></svg:g>`,
})
export class ArcticonsPinoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
