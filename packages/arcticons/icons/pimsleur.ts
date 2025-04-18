import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPimsleurIcon],svg[arcticons-pimsleur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.013 20.513a16.013 16.013 0 0 0-32.026 0c0 8.844 6.572 16.992 16.013 22.987c0-7.389 16.013-8.51 16.013-22.987"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.843 8.73A24.33 24.33 0 0 0 19.85 30.785A24.9 24.9 0 0 0 24 43.5c.112-7.949 5.507-18.322 15.987-22.023"></svg:path>`,
})
export class ArcticonsPimsleurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
