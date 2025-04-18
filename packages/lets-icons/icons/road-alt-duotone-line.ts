import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRoadAltDuotoneLineIcon],svg[lets-icons-road-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsRoadAltDuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="#fff" d="m8.574 20.352l3.381-6.763a.05.05 0 0 1 .09 0l3.381 6.763c.022.044-.026.09-.07.066l-3.331-1.904a.05.05 0 0 0-.05 0l-3.332 1.904c-.043.025-.091-.021-.07-.066Z"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="m20.5 18.5l-4-15m-13 15l4-15m4.5 7v-2m0-3v-2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsRoadAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsRoadAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
