import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRuleIcon],svg[material-symbols-light-rule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.112 19l-.689-.688l2.6-2.6l-2.6-2.6l.689-.689l2.6 2.6l2.6-2.6l.688.689l-2.6 2.6l2.6 2.6l-.688.688l-2.6-2.6zm1.994-8.327l-2.839-2.838l.689-.689l2.125 2.125l4.25-4.25l.688.714zM3 16.116v-1h8v1zm0-7.231v-1h8v1z"></svg:path>`,
})
export class MaterialSymbolsLightRuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
