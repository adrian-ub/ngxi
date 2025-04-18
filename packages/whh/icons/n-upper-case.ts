import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNUpperCaseIcon],svg[whh-n-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024q-31 0-56-32L128 263v697q0 26-18.5 45T64 1024t-45.5-19T0 960V65q0-27 18.5-46T64 0q35 0 55 32l521 730V64q0-26 19-45t45.5-19t45 19T768 64v896q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhNUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
