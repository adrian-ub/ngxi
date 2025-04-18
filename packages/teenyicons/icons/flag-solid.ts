import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFlagSolidIcon],svg[teenyicons-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 .5A.5.5 0 0 1 .5 0h14a.5.5 0 0 1 .457.703L13.047 5l1.91 4.297A.5.5 0 0 1 14.5 10H1v5H0z"></svg:path>`,
})
export class TeenyiconsFlagSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
