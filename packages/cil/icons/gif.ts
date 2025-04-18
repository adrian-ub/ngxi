import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilGifIcon],svg[cil-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 136v224a32.036 32.036 0 0 0 32 32h96V232h-64v32h32v96H96V136h96v-32H96a32.036 32.036 0 0 0-32 32m176-32h32v288h-32zm208 32v-32H328v288h32V264h72v-32h-72v-96z"></svg:path>`,
})
export class CilGifIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
