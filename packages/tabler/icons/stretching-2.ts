import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStretching2Icon],svg[tabler-stretching-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0M6.5 21l3.5-5m-5-5l7-2m4 12l-4-7V9l7-4"></svg:path>`,
})
export class TablerStretching2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
