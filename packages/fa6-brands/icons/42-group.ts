import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6Brands42GroupIcon],svg[fa6-brands-42-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 96v320a160.02 160.02 0 0 0 113.138-46.862a160.02 160.02 0 0 0 34.683-174.367a160 160 0 0 0-86.591-86.592A160 160 0 0 0 320 96M0 256l160.002 160l160.001-160L160.002 96zm480 0a160 160 0 0 0 160 160V96a160 160 0 0 0-160 160"></svg:path>`,
})
export class Fa6Brands42GroupIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
