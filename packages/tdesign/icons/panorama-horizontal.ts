import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPanoramaHorizontalIcon],svg[tdesign-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3.156v17.688l-1.287-.386h-.002l-.009-.003l-.038-.011a23 23 0 0 0-.772-.21a42 42 0 0 0-2.213-.503C16.839 19.362 14.409 19 12 19s-4.838.363-6.679.73a42 42 0 0 0-2.827.668l-.158.046l-.038.01l-.01.004L1 20.844V3.156l1.287.386h.002l.009.003l.038.012l.158.045a42 42 0 0 0 2.827.668C7.161 4.637 9.591 5 12 5s4.838-.362 6.679-.73a42 42 0 0 0 2.827-.668l.158-.045l.038-.012l.01-.002zm-2 2.645c-.519.128-1.175.279-1.929.43C17.161 6.613 14.591 7 12 7s-5.162-.387-7.071-.77c-.754-.15-1.41-.3-1.929-.428V18.2a45 45 0 0 1 1.929-.43C6.839 17.389 9.409 17 12 17s5.162.388 7.071.77c.754.15 1.41.301 1.929.43z"></svg:path>`,
})
export class TdesignPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
