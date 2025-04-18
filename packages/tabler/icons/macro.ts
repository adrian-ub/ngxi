import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMacroIcon],svg[tabler-macro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 15a6 6 0 1 0 12 0"></svg:path><svg:path d="M18 15a6 6 0 0 0-6 6m0 0a6 6 0 0 0-6-6m6 6V11m0 0a5 5 0 0 1-5-5V3l3 2l2-2l2 2l3-2v3a5 5 0 0 1-5 5"></svg:path></svg:g>`,
})
export class TablerMacroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
