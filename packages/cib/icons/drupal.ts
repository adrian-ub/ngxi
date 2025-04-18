import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibDrupalIcon],svg[cib-drupal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.266 4.734C24.344 1.677 20.313.01 16 .01C7.24.01.01 7.239.01 16S7.239 31.99 16 31.99S31.995 24.761 31.995 16c0-4.313-1.672-8.344-4.729-11.266M16 26.427a8.72 8.72 0 0 1-8.76-8.755c0-4.036 2.781-6.818 5.146-9.182c1.667-1.667 3.198-3.198 3.615-5.005c.417 1.667 1.948 3.198 3.615 4.865c2.365 2.365 5.146 5.146 5.146 9.182c0 4.865-3.891 8.76-8.76 8.896z"></svg:path>`,
})
export class CibDrupalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
