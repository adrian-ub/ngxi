import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextRotationDownIcon],svg[material-symbols-light-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.808 20.27l-2.77-2.758l.72-.708l1.55 1.55V4.462h1v13.892l1.55-1.55l.708.708zm4.346-3.94v-1.014l2.838-1.028V9.647l-2.838-1.038V7.592L20.462 11.5v1zm3.708-2.372l5.28-1.908v-.1l-5.28-1.984z"></svg:path>`,
})
export class MaterialSymbolsLightTextRotationDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
