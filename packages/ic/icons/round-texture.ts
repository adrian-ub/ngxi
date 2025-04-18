import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTextureIcon],svg[ic-round-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.58 3.08L3.15 19.51c.09.34.27.65.51.9c.25.24.56.42.9.51L21 4.49c-.19-.69-.73-1.23-1.42-1.41M11.95 3l-8.88 8.88v2.83L14.78 3zM5.07 3c-1.1 0-2 .9-2 2v2l4-4zm14 18c.55 0 1.05-.22 1.41-.59c.37-.36.59-.86.59-1.41v-2l-4 4zm-9.71 0h2.83l8.88-8.88V9.29z"></svg:path>`,
})
export class IcRoundTextureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
