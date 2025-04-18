import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodAngryIcon],svg[tabler-mood-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18M8 9l2 1m6-1l-2 1"></svg:path><svg:path d="M14.5 16.05a3.5 3.5 0 0 0-5 0"></svg:path></svg:g>`,
})
export class TablerMoodAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
