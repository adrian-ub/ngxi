import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFitiaIcon],svg[arcticons-fitia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.125 33.25a4.625 4.625 0 0 0 0 9.25h4.125a4.625 4.625 0 0 0 0-9.25zm0-13.875a4.625 4.625 0 0 0 0 9.25h16.5a4.625 4.625 0 0 0 0-9.25zm0-13.875a4.625 4.625 0 0 0 0 9.25h27.75a4.625 4.625 0 0 0 0-9.25z"></svg:path>`,
})
export class ArcticonsFitiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
