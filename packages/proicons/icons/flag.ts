import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFlagIcon],svg[proicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 21.25v-6m0 0v-10a1.5 1.5 0 0 1 1.5-1.5h11.086a1 1 0 0 1 .821 1.571L15.75 9.5l2.907 4.179a1 1 0 0 1-.82 1.571z"></svg:path>`,
})
export class ProiconsFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
