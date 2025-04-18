import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextGrammarLightning28FilledIcon],svg[fluent-text-grammar-lightning-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7a1 1 0 0 1 1-1h21.997a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 15a1 1 0 0 1 1-1h11.085a1.5 1.5 0 0 0 1.415 2H3a1 1 0 0 1-1-1m14.446-6H3a1 1 0 1 0 0 2h12.498zm8.55-3a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2zm-6.18 1h6.33a.5.5 0 0 1 .435.745L23.751 18h1.514a.75.75 0 0 1 .569 1.24l-6.416 7.452c-.522.606-1.499.052-1.246-.707L19.5 22h-4a.5.5 0 0 1-.451-.714l3.316-7a.5.5 0 0 1 .452-.286"></svg:path>`,
})
export class FluentTextGrammarLightning28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
