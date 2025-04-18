import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVignetteThinIcon],svg[ph-vignette-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM128 76c-37.5 0-68 23.33-68 52s30.5 52 68 52s68-23.33 68-52s-30.5-52-68-52m0 96c-33.08 0-60-19.74-60-44s26.92-44 60-44s60 19.74 60 44s-26.92 44-60 44"></svg:path>`,
})
export class PhVignetteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
