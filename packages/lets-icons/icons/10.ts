import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIcons10Icon],svg[lets-icons-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6v12M8 6L5 9m7 3c0-4.5.583-6 3.5-6S19 7.5 19 12s-.583 6-3.5 6s-3.5-1.5-3.5-6m1-5l5 10"></svg:path>`,
})
export class LetsIcons10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
