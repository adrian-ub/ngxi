import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconHeartFill24Icon],svg[octicon-heart-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20.408c-.492.308-.903.546-1.192.709q-.23.129-.463.252h-.002a.75.75 0 0 1-.686 0a17 17 0 0 1-.465-.252a31 31 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513C1 5.052 3.829 2.5 6.736 2.5C9.03 2.5 10.881 3.726 12 5.605C13.12 3.726 14.97 2.5 17.264 2.5C20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31 31 0 0 1 14 20.408"></svg:path>`,
})
export class OcticonHeartFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
