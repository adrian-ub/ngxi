import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowUp05Icon],svg[hugeicons-arrow-up-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.001 4.013h11.997m-6.002 8.497l.37-.002c2.972.02 4.004-.12 3.516-1.368l-.184-.307l-.174-.248l-.417-.532l-.876-.994l-.87-1.017l-.457-.497l-.228-.222l-.381-.26l-.337-.05l-.334.055l-.377.265l-.225.224l-.45.503l-.857 1.029l-.863 1.006l-.41.538l-.17.25l-.18.309c-.472 1.253.562 1.381 3.533 1.321zm0 0l.05 7.503" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowUp05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
