import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsPenToolIcon],svg[zondicons-pen-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9.27V0l6 11l-4 6H7l-4-6L9 0v9.27a2 2 0 1 0 2 0M6 18h8v2H6z"></svg:path>`,
})
export class ZondiconsPenToolIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
