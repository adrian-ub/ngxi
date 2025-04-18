import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSnitchIcon],svg[arcticons-snitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 14.75H10.125a4.625 4.625 0 0 0 0 9.25h27.75a4.625 4.625 0 0 1 0 9.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 14.75H10.125a4.625 4.625 0 0 0 0 9.25h27.75a4.625 4.625 0 0 1 0 9.25H5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.25 42.5V10.125a4.625 4.625 0 0 0-9.25 0v27.75a4.625 4.625 0 0 1-9.25 0V5.5"></svg:path>`,
})
export class ArcticonsSnitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
