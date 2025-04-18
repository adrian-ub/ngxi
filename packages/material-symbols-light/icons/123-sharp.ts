import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight123SharpIcon],svg[material-symbols-light-123-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.885 14.692v-4.5h-1.5v-.884h2.384v5.384zm3.384 0v-3.076h3.039v-1.424H9.269v-.884h3.923v3.077h-3.038v1.423h3.038v.884zm5.923 0v-.884h3.039v-1.423h-2.039v-.77h2.039v-1.423h-3.039v-.884h3.924v5.384z"></svg:path>`,
})
export class MaterialSymbolsLight123SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
