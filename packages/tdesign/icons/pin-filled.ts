import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPinFilledIcon],svg[tdesign-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.076.981l4.949 4.95l-6.365 7.773l2.121 2.12l-5.305 5.306l-4.596-4.596l-6.718 6.718l-1.414-1.415l6.718-6.717l-4.597-4.596l5.306-5.306l2.121 2.122z"></svg:path>`,
})
export class TdesignPinFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
