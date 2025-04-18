import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTrumpetIcon],svg[icon-park-twotone-trumpet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTrumpet0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M32 28h6v11a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M29 12h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H28"></svg:path><svg:path stroke-linejoin="round" d="M14 14h-2a6 6 0 0 0 0 12h2"></svg:path><svg:path fill="#555" d="M14.198 33a.2.2 0 0 1-.198-.198V6.198c0-.11.089-.198.198-.198H17.5C24.956 6 31 12.044 31 19.5S24.956 33 17.5 33z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTrumpet0)"></svg:path>`,
})
export class IconParkTwotoneTrumpetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
