import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDiscIcon],svg[tabler-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-4 0a5 5 0 0 1 5-5m0 10a5 5 0 0 0 5-5"></svg:path></svg:g>`,
})
export class TablerDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
