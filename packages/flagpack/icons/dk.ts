import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackDkIcon],svg[flagpack-dk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C51918" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackDk0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackDk0)"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M10 0h4v10h18v4H14v10h-4V14H0v-4h10z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackDkIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
