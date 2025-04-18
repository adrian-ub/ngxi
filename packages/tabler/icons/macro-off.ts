import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMacroOffIcon],svg[tabler-macro-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 15a6 6 0 0 0 11.47 2.467"></svg:path><svg:path d="M15.53 15.53A6 6 0 0 0 12 21"></svg:path><svg:path d="M12 21a6 6 0 0 0-6-6m6 6V11m-1.134-.13a5.01 5.01 0 0 1-3.734-3.723M7 3l3 2l2-2l2 2l3-2v3a5 5 0 0 1-2.604 4.389M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerMacroOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
