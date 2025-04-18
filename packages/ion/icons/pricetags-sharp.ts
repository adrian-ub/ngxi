import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPricetagsSharpIcon],svg[ion-pricetags-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 16L0 304l176 176l288-288V16Zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M480 64v144L216.9 471.1L242 496l270-272V64z"></svg:path>`,
})
export class IonPricetagsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
