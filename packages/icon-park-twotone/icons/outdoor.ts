import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneOutdoorIcon],svg[icon-park-twotone-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTOutdoor0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="m4 42l14-32l10 24l4-12l12 20zm33-28a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTOutdoor0)"></svg:path>`,
})
export class IconParkTwotoneOutdoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
