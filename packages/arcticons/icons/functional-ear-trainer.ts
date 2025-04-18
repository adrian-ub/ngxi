import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFunctionalEarTrainerIcon],svg[arcticons-functional-ear-trainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.875 4.5c-.554 0-1 .446-1 1v22.139l-.002.002a8.5 8.5 0 0 0-4.248-1.14a8.5 8.5 0 0 0-8.5 8.5h0a8.5 8.5 0 0 0 17 0V21.5h2.75c.554 0 1-.447 1-1v-2c0-.555-.446-1-1-1h-2.75v-5h7.75c.554 0 1-.447 1-1v-6c0-.555-.446-1-1-1z"></svg:path>`,
})
export class ArcticonsFunctionalEarTrainerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
