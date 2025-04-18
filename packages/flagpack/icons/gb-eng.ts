import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGbEngIcon],svg[flagpack-gb-eng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="flagpackGbEng0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><svg:path fill="#fff" d="M0 0h32v24H0z"></svg:path></svg:mask><svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackGbEng0)"><svg:path fill="#F7FCFF" d="M0 0v24h32V0H0z"></svg:path><svg:path fill="#F50302" d="M18 0h-4v10H0v4h14v10h4V14h14v-4H18V0z"></svg:path></svg:g>`,
})
export class FlagpackGbEngIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
