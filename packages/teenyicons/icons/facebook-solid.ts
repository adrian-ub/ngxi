import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFacebookSolidIcon],svg[teenyicons-facebook-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7.5a7.5 7.5 0 1 1 8 7.484V9h2V8H8V6.5A1.5 1.5 0 0 1 9.5 5h.5V4h-.5A2.5 2.5 0 0 0 7 6.5V8H5v1h2v5.984A7.5 7.5 0 0 1 0 7.5"></svg:path>`,
})
export class TeenyiconsFacebookSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
