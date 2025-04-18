import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAdobeIcon],svg[streamline-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.233.816L.816 13.183H7.75l-.884-2.65H5.157L7 4.965l2.975 8.218h3.208L8.766.816z"></svg:path><svg:path d="M.816.816h12.367v12.367H.816z"></svg:path></svg:g>`,
})
export class StreamlineAdobeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
