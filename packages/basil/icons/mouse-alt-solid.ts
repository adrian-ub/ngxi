import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilMouseAltSolidIcon],svg[basil-mouse-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.014 2.654a6.5 6.5 0 0 1 5.486 6.42v5.852a6.5 6.5 0 0 1-13 0V9.074a6.5 6.5 0 0 1 7.514-6.42M11.25 10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class BasilMouseAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
