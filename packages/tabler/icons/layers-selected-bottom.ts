import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLayersSelectedBottomIcon],svg[tabler-layers-selected-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4 14.5l4-4M9.496 20l4.004-4zm-4.91-.586L8.5 15.5M8 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"></svg:path><svg:path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2"></svg:path></svg:g>`,
})
export class TablerLayersSelectedBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
