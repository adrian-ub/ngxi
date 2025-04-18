import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLeafIcon],svg[icon-park-outline-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 24c0 14.094-13 20-13 20s-13-4.625-13-20S24 4 24 4s13 5.906 13 20M24 36l5-5m-5-2l-5-5m5-1l5-5m-5 26V14"></svg:path>`,
})
export class IconParkOutlineLeafIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
