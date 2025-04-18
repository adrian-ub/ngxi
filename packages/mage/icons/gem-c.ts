import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageGemCIcon],svg[mage-gem-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18.612 10.82l-5.737-7.881a1.06 1.06 0 0 0-.382-.323a1.1 1.1 0 0 0-.986 0a1.06 1.06 0 0 0-.381.323l-5.738 7.88A2 2 0 0 0 5 12a2 2 0 0 0 .388 1.18l5.738 7.881c.098.136.229.246.38.323a1.1 1.1 0 0 0 .987 0c.152-.077.283-.187.381-.323l5.738-7.88A2 2 0 0 0 19 12a2 2 0 0 0-.388-1.18"></svg:path><svg:path d="M5.015 12.195L12 15.078l6.985-2.883"></svg:path></svg:g>`,
})
export class MageGemCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
