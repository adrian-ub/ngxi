import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorStar28Icon],svg[fluent-color-star-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorStar280)" d="M12.701 3.908c.532-1.077 2.069-1.077 2.6 0l2.692 5.453l6.017.874c1.19.173 1.664 1.635.804 2.474l-4.355 4.244l1.028 5.993c.204 1.184-1.04 2.087-2.103 1.528l-5.382-2.83l-5.382 2.83c-1.064.56-2.307-.344-2.104-1.528l1.028-5.993l-4.355-4.244c-.86-.84-.385-2.3.804-2.474l6.017-.874z"></svg:path><svg:defs><svg:lineargradient id="fluentColorStar280" x1="25.25" x2="2.112" y1="25.124" y2="3.296" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorStar28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
