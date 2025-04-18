import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSupportSolidIcon],svg[mynaui-support-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.66 6.72A8.22 8.22 0 0 0 3.75 12c0 2.008.717 3.849 1.91 5.28l2.853-2.853a4.31 4.31 0 0 1 0-4.854zm12.68 0l-2.853 2.853a4.31 4.31 0 0 1 0 4.854l2.853 2.852A8.22 8.22 0 0 0 20.25 12a8.22 8.22 0 0 0-1.91-5.28M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m11.695-1.944C12.889 9 11.11 9 10.055 10.056C9 11.11 9 12.889 10.056 13.945s2.834 1.055 3.89 0c1.055-1.056 1.055-2.834 0-3.89"></svg:path>`,
})
export class MynauiSupportSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
