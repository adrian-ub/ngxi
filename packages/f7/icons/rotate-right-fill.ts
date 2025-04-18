import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7RotateRightFillIcon],svg[f7-rotate-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.727 25.106c.539-.258.773-.657.75-1.313c-.07-.844-1.032-2.016-1.032-5.133c0-5.015 3.235-8.554 8.297-8.554h.07v3.234c0 1.851 1.454 2.273 2.86 1.219l6.398-4.664c1.078-.774 1.078-1.688 0-2.485l-6.398-4.687c-1.43-1.079-2.86-.656-2.86 1.242V7.41h-.093c-6.727 0-11.203 4.524-11.203 11.227c0 2.508.515 4.57 1.242 5.812c.398.68 1.242 1.008 1.968.657m37.734 29.25c4.008 0 6.023-1.922 6.023-6.024v-23.18c0-4.101-2.015-6.023-6.023-6.023H22.234c-4.008 0-6.023 1.922-6.023 6.023v23.18c0 4.102 2.016 6.024 6.023 6.024Z"></svg:path>`,
})
export class F7RotateRightFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
