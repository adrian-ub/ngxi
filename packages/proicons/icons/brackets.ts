import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBracketsIcon],svg[proicons-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.75 3.75h-2a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h2m6.5-16.5h2a2 2 0 0 1 2 2v12.5a2 2 0 0 1-2 2h-2"></svg:path>`,
})
export class ProiconsBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
