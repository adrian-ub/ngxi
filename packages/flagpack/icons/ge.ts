import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGeIcon],svg[flagpack-ge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackGe0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill="#E31D1C" fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackGe0)"><svg:path d="M14 0h4v10h14v4H18v10h-4V14H0v-4h14z"></svg:path><svg:path d="M9.999 17.222L12.2 17v2s-2.201-.138-2.201-.098S10.2 21 10.2 21h-2l.16-2H6.2v-2l2.16.222L8.2 15h2zm0-12L12.2 5v2s-2.201-.138-2.201-.098S10.2 9 10.2 9h-2l.16-2H6.2V5l2.16.222L8.2 3h2zm14 0L26.2 5v2s-2.201-.138-2.201-.098S24.2 9 24.2 9h-2l.16-2H20.2V5l2.16.222L22.2 3h2zm0 12L26.2 17v2s-2.201-.138-2.201-.098S24.2 21 24.2 21h-2l.16-2H20.2v-2l2.16.222L22.2 15h2z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackGeIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
