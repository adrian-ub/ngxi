import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAtom2Icon],svg[tabler-atom-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 9v.01M3 9v.01M21 9v.01M8 20.1A9 9 0 0 1 3 13m13 7.1a9 9 0 0 0 5-7.1M6.2 5a9 9 0 0 1 11.4 0"></svg:path>`,
})
export class TablerAtom2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
