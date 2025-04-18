import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHomeDuotoneLineIcon],svg[lets-icons-home-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsHomeDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M5.5 10v7.5c0 .943 0 1.414.293 1.707s.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707V10"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M14.5 19v-4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsHomeDuotoneLine0)"></svg:path>`,
})
export class LetsIconsHomeDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
