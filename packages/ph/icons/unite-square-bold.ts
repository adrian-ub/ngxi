import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareBoldIcon],svg[ph-unite-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12zm-63 44L52 91V69l135 135ZM69 52h22l113 113v22Zm135 79l-23-23h23Zm-56-56l-23-23h23Zm-96 50l23 23H52Zm56 56l23 23h-23Z"></svg:path>`,
})
export class PhUniteSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
