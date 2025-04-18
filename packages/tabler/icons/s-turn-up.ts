import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSTurnUpIcon],svg[tabler-s-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 19a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:path d="M5 17V7.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0V3"></svg:path><svg:path d="m16 6l3-3l3 3"></svg:path></svg:g>`,
})
export class TablerSTurnUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
