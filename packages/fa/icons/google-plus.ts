import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faGooglePlusIcon],svg[fa-google-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1437 753q0 208-87 370.5t-248 254t-369 91.5q-149 0-285-58t-234-156t-156-234T0 736t58-285t156-234T448 61T733 3q286 0 491 192l-199 191Q908 273 733 273q-123 0-227.5 62T340 503.5T279 736t61 232.5T505.5 1137t227.5 62q83 0 152.5-23t114.5-57.5t78.5-78.5t49-83t21.5-74H733V631h692q12 63 12 122m867-122v210h-209v209h-210V841h-209V631h209V422h210v209z"></svg:path>`,
})
export class FaGooglePlusIcon {
  readonly viewBox = input("0 0 2304 1472")
  readonly width = input("1.57em")
  readonly height = input("1em")
}
