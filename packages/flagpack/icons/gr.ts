import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGrIcon],svg[flagpack-gr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#4564F9" fill-rule="evenodd" d="M0 5.5h32v2.957H0zm0 5.315h32v2.957H0zm32 5.128H0V18.9h32zM0 0h32v3H0z" clip-rule="evenodd"></svg:path><svg:path fill="#4564F9" d="M0 21h32v3H0z"></svg:path><svg:path fill="#4564F9" fill-rule="evenodd" d="M0 0h15v13.8H0z" clip-rule="evenodd"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M6 0h3v5.504h6v2.935H9V14.5H6V8.439H0V5.504h6z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackGrIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
