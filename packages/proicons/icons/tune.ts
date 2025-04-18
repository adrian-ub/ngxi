import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTuneIcon],svg[proicons-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12h10.5m0 0a2.5 2.5 0 0 0 5 0m-5 0a2.5 2.5 0 0 1 5 0m0 0h3M7.75 5.25h13.5m-13.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-5 13.5h3m0 0a2.5 2.5 0 0 0 5 0m-5 0a2.5 2.5 0 0 1 5 0m0 0h10.5"></svg:path>`,
})
export class ProiconsTuneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
