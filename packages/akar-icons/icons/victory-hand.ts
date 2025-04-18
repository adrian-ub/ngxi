import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsVictoryHandIcon],svg[akar-icons-victory-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 11l-1-7.272c0-.466.185-.913.515-1.243c1.024-1.024 2.777-.44 2.982.994L16 10l1.508-6.328a1.682 1.682 0 0 1 3.276.73L19 16"></svg:path><svg:path d="M19 16c-.536 4-3.358 6-7.5 6S4 20 4 16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 16v-4a2 2 0 1 1 4 0m4 1v-2a2 2 0 1 0-4 0v4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.692 17H11a2 2 0 1 1 0-4h4c2.21 0 4.5 2 3.5 5"></svg:path></svg:g>`,
})
export class AkarIconsVictoryHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
