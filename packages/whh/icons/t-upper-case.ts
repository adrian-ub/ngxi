import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTUpperCaseIcon],svg[whh-t-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 128H448v832q0 27-19 45.5t-45 18.5t-45-18.5t-19-45.5V128H64q-27 0-45.5-18.5T0 64.5T18.5 19T64 0h640q26 0 45 19t19 45.5t-18.5 45T704 128"></svg:path>`,
})
export class WhhTUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
