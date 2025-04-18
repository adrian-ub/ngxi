import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBentoSharpIcon],svg[material-symbols-light-bento-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.308 11.5h6.807V5.885h-6.807zM2.885 18.116h10.423V5.885H2.885zm5.211-5.077q-.433 0-.736-.304q-.302-.302-.302-.735t.302-.736q.303-.303.736-.303t.736.303t.302.736t-.302.735t-.736.303m6.212 5.078h6.808V12.5h-6.808z"></svg:path>`,
})
export class MaterialSymbolsLightBentoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
