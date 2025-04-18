import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEffectsIcon],svg[icon-park-twotone-effects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEffects0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="m24.95 42.36l5.466-11.99l12.689-3.72l-9.767-8.88l.368-13.163l-11.502 6.503l-12.46-4.416l2.657 12.9l-8.069 10.433l13.145 1.47z"></svg:path><svg:path d="m36.178 36.054l8 7.964"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEffects0)"></svg:path>`,
})
export class IconParkTwotoneEffectsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
