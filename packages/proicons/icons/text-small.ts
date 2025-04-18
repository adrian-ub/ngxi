import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextSmallIcon],svg[proicons-text-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.5 18.138l1.964-4.507m0 0h7.072m-7.072 0l3.01-6.904a.566.566 0 0 1 1.052 0l3.01 6.905m0 0l1.964 4.506"></svg:path>`,
})
export class ProiconsTextSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
