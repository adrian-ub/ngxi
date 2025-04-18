import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSecurityStallIcon],svg[icon-park-twotone-security-stall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSecurityStall0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M16 29h16v15H16zM12 4h24v6H12z"></svg:path><svg:path d="M16 10v19m16-19v19"></svg:path><svg:path stroke-linejoin="round" d="M4 44h40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSecurityStall0)"></svg:path>`,
})
export class IconParkTwotoneSecurityStallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
