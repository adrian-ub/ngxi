import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneOptimizeIcon],svg[icon-park-twotone-optimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTOptimize0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="m19 8l9 8l10.032-5.89L33 21l9 8l-12-1l-4.5 10L23 27l-12-1l10.508-6.35z"></svg:path><svg:path d="M8 42.02L23 27"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTOptimize0)"></svg:path>`,
})
export class IconParkTwotoneOptimizeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
