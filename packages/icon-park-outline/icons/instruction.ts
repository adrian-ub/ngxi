import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineInstructionIcon],svg[icon-park-outline-instruction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linejoin="round" d="M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v6H4z"></svg:path><svg:path d="m25 23l-2 11"></svg:path><svg:path stroke-linejoin="round" d="m31 23l6 5l-6 6M17 23l-6 5l6 6"></svg:path></svg:g>`,
})
export class IconParkOutlineInstructionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
