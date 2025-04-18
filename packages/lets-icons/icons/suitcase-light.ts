import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSuitcaseLightIcon],svg[lets-icons-suitcase-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zm2 11v1a1 1 0 0 0 1 1v0a1 1 0 0 0 1-1v-1m3 0v1a1 1 0 0 0 1 1v0a1 1 0 0 0 1-1v-1m-6-12v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3"></svg:path>`,
})
export class LetsIconsSuitcaseLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
