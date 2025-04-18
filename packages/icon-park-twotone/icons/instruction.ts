import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneInstructionIcon],svg[icon-park-twotone-instruction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTInstruction0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="#555" stroke-linejoin="round" d="M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v6H4z"></svg:path><svg:path d="m25 23l-2 11"></svg:path><svg:path stroke-linejoin="round" d="m31 23l6 5l-6 6M17 23l-6 5l6 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTInstruction0)"></svg:path>`,
})
export class IconParkTwotoneInstructionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
