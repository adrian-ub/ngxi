import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGymnasticsIcon],svg[tabler-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 14l1-9l7-6M3 11h6l5 1m-2.5-3.5L16 5"></svg:path>`,
})
export class TablerGymnasticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
