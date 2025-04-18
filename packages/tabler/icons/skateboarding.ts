import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSkateboardingIcon],svg[tabler-skateboarding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0M5.5 15H9l.75-1.5M14 19v-5l-2.5-3L14 7"></svg:path><svg:path d="m8 8l3-1h4l1 3h3"></svg:path><svg:path fill="currentColor" d="M17.5 21a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M3 18c0 .552.895 1 2 1h14c1.105 0 2-.448 2-1"></svg:path><svg:path fill="currentColor" d="M6.5 21a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class TablerSkateboardingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
