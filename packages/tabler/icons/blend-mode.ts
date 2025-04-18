import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBlendModeIcon],svg[tabler-blend-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M3 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path></svg:g>`,
})
export class TablerBlendModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
