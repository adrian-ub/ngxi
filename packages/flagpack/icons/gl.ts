import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGlIcon],svg[flagpack-gl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C51918" fill-rule="evenodd" d="M0 12h32v12H0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackGl0" width="32" height="12" x="0" y="12" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 12h32v12H0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackGl0)"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0h32v12H0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackGl1" width="32" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0h32v12H0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackGl1)"><svg:path fill="#C51918" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackGlIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
