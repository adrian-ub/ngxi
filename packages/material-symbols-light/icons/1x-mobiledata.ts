import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight1xMobiledataIcon],svg[material-symbols-light-1x-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 16.5v-8h-2v-1h3v9zm4.735 0l2.842-4.8l-2.542-4.2h1.196l1.958 3.211l1.93-3.211h1.147l-2.493 4.2l2.843 4.8h-1.197l-2.269-3.811l-2.27 3.811z"></svg:path>`,
})
export class MaterialSymbolsLight1xMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
