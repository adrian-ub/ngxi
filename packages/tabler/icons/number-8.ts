import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNumber8Icon],svg[tabler-number-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M8 16a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path></svg:g>`,
})
export class TablerNumber8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
