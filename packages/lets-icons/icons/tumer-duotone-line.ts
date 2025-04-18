import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTumerDuotoneLineIcon],svg[lets-icons-tumer-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsTumerDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="14" r="8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M12 14v-3"></svg:path><svg:path stroke="silver" stroke-linecap="round" stroke-opacity=".25" d="M17.5 7.5L19 6m-8.932-2.63c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 3c.44 0 .868.036 1.217.103s.6.161.715.268"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsTumerDuotoneLine0)"></svg:path>`,
})
export class LetsIconsTumerDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
