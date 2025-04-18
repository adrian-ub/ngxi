import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewCarouselRoundedIcon],svg[material-symbols-light-view-carousel-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.115 16q-.343 0-.575-.23q-.232-.23-.232-.57V8.8q0-.34.232-.57q.232-.23.575-.23h1.077q.344 0 .576.23Q6 8.46 6 8.8v6.4q0 .34-.232.57q-.232.23-.576.23H4.115ZM8.8 18q-.34 0-.57-.232q-.23-.232-.23-.576V6.808q0-.344.23-.576Q8.46 6 8.8 6h6.4q.34 0 .57.232q.23.232.23.576v10.384q0 .344-.23.576q-.23.232-.57.232H8.8Zm10.008-2q-.344 0-.576-.23Q18 15.54 18 15.2V8.8q0-.34.232-.57q.232-.23.576-.23h1.077q.343 0 .575.23q.232.23.232.57v6.4q0 .34-.232.57q-.232.23-.575.23h-1.077Z"></svg:path>`,
})
export class MaterialSymbolsLightViewCarouselRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
