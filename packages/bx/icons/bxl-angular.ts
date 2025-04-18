import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlAngularIcon],svg[bx-bxl-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10.483 12.482h3.034L12 8.831z" fill="currentColor"></svg:path><svg:path d="M12 3.074L3.689 6.038l1.268 10.987l7.043 3.9l7.043-3.9l1.268-10.987L12 3.074zm5.187 13.621H15.25l-1.045-2.606h-4.41L8.75 16.695H6.813L12 5.047l5.187 11.648z" fill="currentColor"></svg:path>`,
})
export class BxBxlAngularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
