import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGateIcon],svg[icon-park-twotone-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGate0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13 10v25m22-25v25"></svg:path><svg:path d="M8 18h32"></svg:path><svg:path stroke-linejoin="round" d="M24 10v8"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M39 10H9L5 4s11.07 1 19 1s19-1 19-1zM10 35h6v9h-6zm22 0h6v9h-6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGate0)"></svg:path>`,
})
export class IconParkTwotoneGateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
