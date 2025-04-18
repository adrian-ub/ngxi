import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilResizeWidthIcon],svg[cil-resize-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M366.156 392H328v-72H184v72h-38.627L9.607 256.235L145.845 120H184v72h144v-72h38.627l135.766 135.765ZM54.863 256.235L152 353.373V288h208v64.9l97.137-97.137L360 158.627V224H152v-64.9Z"></svg:path>`,
})
export class CilResizeWidthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
