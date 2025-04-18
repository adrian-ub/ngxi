import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLactationNegativeIcon],svg[healthicons-lactation-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsLactationNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm33.066 21.368a2.5 2.5 0 0 0-2.634-1.335L17.18 22.208a3.5 3.5 0 0 0-2.554 1.869L10.27 32.65a2.5 2.5 0 0 0 .205 2.6l5.73 7.898a2.5 2.5 0 0 0 4.048-2.937l-1.689-2.327c.122-.58.5-1.101 1.074-1.383l3.231-1.591l-3.23-1.59a2 2 0 0 1-1.118-1.795v-3.949a2 2 0 0 1 4 0v2.704l5.76 2.835a2 2 0 0 1 .617 3.118l.021-.005l-1.253 1.727a2.5 2.5 0 1 0 4.047 2.936l5.73-7.898a2.5 2.5 0 0 0 .206-2.6zM34 28.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M24 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsLactationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsLactationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
