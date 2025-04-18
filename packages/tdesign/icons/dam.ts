import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDamIcon],svg[tdesign-dam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .671l9 7.875V20h1v2h-9v-2h1V10h-4v10h1v2H2v-2h1V8.546zm-7 19.33h3V10H5zM6.662 8H17.34L12 3.328zM19 10h-3v10h3z"></svg:path>`,
})
export class TdesignDamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
