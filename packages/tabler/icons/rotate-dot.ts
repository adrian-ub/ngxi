import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRotateDotIcon],svg[tabler-rotate-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5"></svg:path><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerRotateDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
