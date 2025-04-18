import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneScrewdriverIcon],svg[icon-park-twotone-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTScrewdriver0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M19 24h10v5c.961.976 2.039 2.524 3 3.5V44H16V32.5l3-3.5z"></svg:path><svg:path stroke-linecap="round" d="M21 13v11h6V13l2-3l-2-6h-6l-2 6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTScrewdriver0)"></svg:path>`,
})
export class IconParkTwotoneScrewdriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
