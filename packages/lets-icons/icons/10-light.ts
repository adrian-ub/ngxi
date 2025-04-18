import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIcons10LightIcon],svg[lets-icons-10-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 18.5v-13l-3 3m6 3.5c0-5 1.083-6.5 4-6.5s4 1.5 4 6.5s-1.083 6.5-4 6.5s-4-1.5-4-6.5M12 7l5 10"></svg:path>`,
})
export class LetsIcons10LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
