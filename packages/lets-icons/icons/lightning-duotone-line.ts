import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLightningDuotoneLineIcon],svg[lets-icons-lightning-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsLightningDuotoneLine0"><svg:g fill="none"><svg:path stroke="#fff" d="m9.556 13.323l-.12-.01c-1.528-.14-2.292-.209-2.535-.732c-.242-.522.198-1.15 1.077-2.407l3.583-5.119c.581-.83.872-1.245 1.123-1.157c.25.089.216.594.15 1.605l-.204 3.049c-.062.92-.092 1.38.172 1.69c.265.31.724.351 1.642.435l.12.01c1.528.14 2.292.209 2.535.732c.242.522-.198 1.15-1.078 2.407l-3.582 5.119c-.581.83-.872 1.245-1.123 1.157c-.25-.089-.216-.594-.15-1.605l.204-3.049c.062-.92.092-1.38-.172-1.69c-.265-.31-.724-.351-1.642-.435Z"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M18.5 4L17 6h2l-1.5 2m-11 8L5 18h2l-1.5 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsLightningDuotoneLine0)"></svg:path>`,
})
export class LetsIconsLightningDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
