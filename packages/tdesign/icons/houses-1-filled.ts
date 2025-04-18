import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHouses1FilledIcon],svg[tdesign-houses-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20h-5.5v-8h-9v8H2zm6 7V6H6v3zm5 0V6h-2v3zm3 0h2V6h-2z"></svg:path><svg:path fill="currentColor" d="M9.5 22v-6h5v6z"></svg:path>`,
})
export class TdesignHouses1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
