import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStarHalfFilledIcon],svg[ix-star-half-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M257.749 22.844h-2.244v340.271l-139.021 84.914l37.932-159.022L30.258 182.652l162.96-13.064l62.783-150.947z" clip-rule="evenodd"></svg:path>`,
})
export class IxStarHalfFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
