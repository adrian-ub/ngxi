import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlAngularIcon],svg[bxl-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.483 12.482h3.034L12 8.831z"></svg:path><svg:path fill="currentColor" d="M12 3.074L3.689 6.038l1.268 10.987l7.043 3.9l7.043-3.9l1.268-10.987zm5.187 13.621H15.25l-1.045-2.606h-4.41L8.75 16.695H6.813L12 5.047z"></svg:path>`,
})
export class BxlAngularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
