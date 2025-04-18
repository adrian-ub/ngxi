import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEmphasisCnIcon],svg[ri-emphasis-cn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M13 2v2h6v2h-1.968a18.2 18.2 0 0 1-3.621 6.302a14.7 14.7 0 0 0 5.327 3.042l-.536 1.93A16.7 16.7 0 0 1 12 13.726a16.7 16.7 0 0 1-6.2 3.547l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042a18 18 0 0 1-2.822-4.3h2.24A16 16 0 0 0 12 10.876A16.2 16.2 0 0 0 14.91 6H5V4h6V2z"></svg:path>`,
})
export class RiEmphasisCnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
