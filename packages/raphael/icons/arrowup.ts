import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelArrowupIcon],svg[raphael-arrowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.963 20.834L17.5 9.64c-.825-1.43-2.175-1.43-3 0L8.037 20.834c-.825 1.43-.15 2.598 1.5 2.598h12.926c1.65 0 2.325-1.17 1.5-2.598"></svg:path>`,
})
export class RaphaelArrowupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
