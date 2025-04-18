import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAz1x1Icon],svg[flag-az-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f9c35" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ed2939" d="M0 0h512v341.3H0z"></svg:path><svg:path fill="#00b9e4" d="M0 0h512v170.7H0z"></svg:path><svg:circle cx="238.8" cy="256" r="76.8" fill="#fff"></svg:circle><svg:circle cx="255.9" cy="256" r="64" fill="#ed2939"></svg:circle><svg:path fill="#fff" d="m324.2 213.3l8.1 23l22-10.5l-10.4 22l23 8.2l-23 8.2l10.4 22l-22-10.5l-8.1 23l-8.2-23l-22 10.5l10.5-22l-23-8.2l23-8.2l-10.5-22l22 10.5z"></svg:path>`,
})
export class FlagAz1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
