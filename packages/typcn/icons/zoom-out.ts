import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnZoomOutIcon],svg[typcn-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11H8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1m6.381 4.956l-.949-.986l-.537-.537l-.749-.75c.227-.688.354-1.42.354-2.183c0-3.859-3.14-7-7-7s-7 3.141-7 7s3.14 7 7 7c.763 0 1.496-.127 2.184-.354l.75.749l1.512 1.51l.06.061l.065.055a3.28 3.28 0 0 0 2.104.784a3.134 3.134 0 0 0 3.13-3.131c0-.84-.328-1.628-.924-2.218M5.5 11.5c0-2.757 2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5"></svg:path>`,
})
export class TypcnZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
