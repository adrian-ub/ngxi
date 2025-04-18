import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDiffIcon],svg[proicons-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 10.25h7m0 0h7m-7 0v-7m0 7v7m-7 3.5h14"></svg:path>`,
})
export class ProiconsDiffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
