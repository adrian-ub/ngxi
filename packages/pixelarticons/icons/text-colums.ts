import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTextColumsIcon],svg[pixelarticons-text-colums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5H3v2h8zm10 0h-8v2h8zM3 9h8v2H3zm18 0h-8v2h8zM3 13h8v2H3zm18 0h-8v2h8zM3 17h8v2H3zm18 0h-8v2h8z"></svg:path>`,
})
export class PixelarticonsTextColumsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
