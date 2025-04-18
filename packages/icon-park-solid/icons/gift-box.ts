import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGiftBoxIcon],svg[icon-park-solid-gift-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSGiftBox0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path><svg:path stroke="#000" d="M4 24h40M24 44V4"></svg:path><svg:path stroke="#fff" d="M6 30V18m36 12V18M30 42H18M30 6H18"></svg:path><svg:path stroke="#000" d="M24 24s7.897-3.546 9.099-4.747a3.077 3.077 0 1 0-4.352-4.352C27.546 16.103 24 24 24 24m0 0s-7.897-3.546-9.099-4.747m9.1 4.747s-3.547-7.897-4.748-9.099M24 24s7.897 3.546 9.099 4.747M24 24s3.546 7.897 4.747 9.099M24 23.999s-7.897 3.547-9.099 4.748a3.077 3.077 0 1 0 4.352 4.352c1.201-1.202 4.747-9.1 4.747-9.1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSGiftBox0)"></svg:path>`,
})
export class IconParkSolidGiftBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
