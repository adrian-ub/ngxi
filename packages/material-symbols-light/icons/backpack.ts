import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackpackIcon],svg[material-symbols-light-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.667 0-1.141-.462T5 19.442V8.404q0-1.27.85-2.221T8 5.053V3h2v2h4V3h2v2.054q1.3.177 2.15 1.129t.85 2.22v11.04q0 .632-.475 1.095t-1.14.462zm8.5-5.423h1v-2.923H7.885v1h7.23z"></svg:path>`,
})
export class MaterialSymbolsLightBackpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
