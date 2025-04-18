import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiScOdnoklassnikiIcon],svg[ei-sc-odnoklassniki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 26c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8m0-12.2c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2s-1.9-4.2-4.2-4.2"></svg:path><svg:path fill="currentColor" d="M33.6 26.8c-.7-.9-1.9-1-2.8-.4c0 0-2.2 1.6-5.8 1.6s-5.8-1.6-5.8-1.6c-.9-.7-2.1-.5-2.8.4s-.5 2.1.4 2.8c.1.1 2.2 1.7 5.7 2.2l-5.3 5.4c-.8.8-.8 2.1 0 2.8c.4.4.9.6 1.4.6s1-.2 1.4-.6l5-5.1l5 5.1c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-5.3-5.4c3.5-.6 5.6-2.2 5.7-2.2c.9-.7 1.1-2 .4-2.8"></svg:path>`,
})
export class EiScOdnoklassnikiIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
