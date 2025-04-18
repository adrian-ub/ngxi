import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineZijinyunyingIcon],svg[icon-park-outline-zijinyunying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 6H14L3 24l11 18h20l11-18z"></svg:path><svg:path d="m15 29l9-14l9 14z"></svg:path></svg:g>`,
})
export class IconParkOutlineZijinyunyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
