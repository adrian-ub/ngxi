import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPointingRight01Icon],svg[hugeicons-pointing-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.003 4.5h-5.997m5.997 0c0-.7-1.993-2.008-2.499-2.5m2.499 2.5c0 .7-1.993 2.009-2.499 2.5M1.998 10.827h.948c.645 0 1.273-.21 1.791-.596l4.9-3.66c.565-.422 1.266-.76 1.913-.48c1.048.45 1.729 1.723.158 3.281L10 10.971h10.416c2.042.056 2.143 3.346 0 3.487H14.48c.19 1.48-.852 8.458-5.27 7.44l-.632-.143c-.919-.206-2.555-.814-3.512-1.485c-.996-.698-1.988-.452-3.068-.452" color="currentColor"></svg:path>`,
})
export class HugeiconsPointingRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
