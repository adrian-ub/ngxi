import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoxModelIcon],svg[tabler-box-model-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 8h8v8H8z"></svg:path><svg:path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12 10l3.3 3.3M16 8l3.3-3.3M8 8L4.7 4.7M8 16l-3.3 3.3"></svg:path></svg:g>`,
})
export class TablerBoxModelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
