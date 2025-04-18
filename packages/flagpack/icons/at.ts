import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackAtIcon],svg[flagpack-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackAt0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill="#C51918" fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackAt0)"><svg:path d="M0 0v8h32V0zm0 16v8h32v-8z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackAtIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
