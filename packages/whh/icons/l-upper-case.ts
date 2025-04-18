import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLUpperCaseIcon],svg[whh-l-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-26 0-45-18.5T0 960V64q0-26 19-45T64.5 0t45 18.5T128 64v800q0 13 9.5 22.5T160 896h544q27 0 45.5 19t18.5 45.5t-18.5 45T704 1024"></svg:path>`,
})
export class WhhLUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
