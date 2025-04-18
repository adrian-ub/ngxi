import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNumber6Icon],svg[tabler-number-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 16a4 4 0 1 0 8 0v-1a4 4 0 1 0-8 0"></svg:path><svg:path d="M16 8a4 4 0 1 0-8 0v8"></svg:path></svg:g>`,
})
export class TablerNumber6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
