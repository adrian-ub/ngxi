import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChecklistIcon],svg[material-symbols-light-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.839 17.904L3 15.066l.689-.689l2.125 2.125l4.25-4.25l.688.714zm0-7.231L3 7.835l.689-.689l2.125 2.125l4.25-4.25l.688.714zm7.18 5.442v-1h8v1zm0-7.23v-1h8v1z"></svg:path>`,
})
export class MaterialSymbolsLightChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
