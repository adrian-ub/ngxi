import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJavaIcon],svg[picon-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3Q1 0 5 0Q2 1 4 3m3 0q2 0 0 3V4q-9 0-5-2q-3 2 5 1M5 6Q0 7 2 4Q1 6 6 5M5 8q-7 0-4-2q-1 2 7 1M5 3q0-2 2-2q-3 0-2 2"></svg:path>`,
})
export class PiconJavaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
