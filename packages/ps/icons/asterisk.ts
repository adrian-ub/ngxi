import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psAsteriskIcon],svg[ps-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 213h128L49 305q-13 15 0 30q6 6 15 6t15-6l92-100v128q0 21 21 21t21-21V235l92 100q6 6 15 6t15-6q13-15 0-30l-100-92h128q21 0 21-21t-21-21H235l100-92q13-15 0-30q-15-13-30 0l-92 100V21q0-21-21-21t-21 21v128L79 49q-15-13-30 0q-13 15 0 30l100 92H21q-21 0-21 21t21 21"></svg:path>`,
})
export class PsAsteriskIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
