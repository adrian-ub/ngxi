import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSomeEmailIcon],svg[nrk-some-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.72 6h14.56L12 12.188zM3 18V7.162l6.135 5.215L6.05 15h1.544l2.313-1.966L12 14.812l2.093-1.778L16.406 15h1.544l-3.085-2.623L21 7.162V18zM1 4v16h22V4z" clip-rule="evenodd"></svg:path>`,
})
export class NrkSomeEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
