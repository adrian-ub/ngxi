import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpJunctionSignIcon],svg[marketeq-up-junction-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 43.75h16.666m8.334-8.333h2.083zm0 8.333h2.083zM8.333 35.417H6.25zm0 8.333H6.25z"></svg:path><svg:path stroke="#306CFE" d="M33.333 35.417h-4.166V18.75h6.25L26.604 8.167a2.083 2.083 0 0 0-3.208 0L14.583 18.75h6.25v16.667h-4.166"></svg:path></svg:g>`,
})
export class MarketeqUpJunctionSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
