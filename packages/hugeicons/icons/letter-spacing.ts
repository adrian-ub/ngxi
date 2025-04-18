import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLetterSpacingIcon],svg[hugeicons-letter-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22V2m20 20V2M7 18l3.653-10.514c.292-.673.835-1.49 1.294-1.486c.68.005 1.036.708 1.43 1.486C13.772 8.266 17 18 17 18m-7.987-5.009l5.882-.062" color="currentColor"></svg:path>`,
})
export class HugeiconsLetterSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
