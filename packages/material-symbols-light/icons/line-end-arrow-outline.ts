import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndArrowOutlineIcon],svg[material-symbols-light-line-end-arrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.192 16.827V12.5H3.077v-1h9.115V7.173L19.788 12zm1-1.823L17.91 12l-4.718-3.004zm0-3.004"></svg:path>`,
})
export class MaterialSymbolsLightLineEndArrowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
