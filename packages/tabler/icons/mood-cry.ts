import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodCryIcon],svg[tabler-mood-cry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 10h.01M15 10h.01M9.5 15.25a3.5 3.5 0 0 1 5 0m3.066 2.356a2 2 0 1 0 2.897.03L19 16z"></svg:path><svg:path d="M20.865 13.517A9 9 0 0 0 21 12a9 9 0 1 0-9 9c.69 0 1.36-.076 2-.222"></svg:path></svg:g>`,
})
export class TablerMoodCryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
