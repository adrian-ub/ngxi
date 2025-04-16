import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSkullIcon],svg[lucide-skull-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12.5 17l-.5-1l-.5 1z"></svg:path><svg:path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25a8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></svg:path><svg:circle cx="15" cy="12" r="1"></svg:circle><svg:circle cx="9" cy="12" r="1"></svg:circle></svg:g>`,
})
export class LucideSkullIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
