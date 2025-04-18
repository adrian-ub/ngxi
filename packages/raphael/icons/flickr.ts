import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelFlickrIcon],svg[raphael-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.77 8.895a7.09 7.09 0 0 0-5.77 2.97a7.09 7.09 0 0 0-5.77-2.97A7.104 7.104 0 0 0 3.125 16a7.104 7.104 0 0 0 7.105 7.105c2.38 0 4.48-1.175 5.77-2.97a7.1 7.1 0 0 0 5.77 2.97a7.105 7.105 0 1 0 0-14.21m0 12.927a5.826 5.826 0 0 1-5.822-5.82a5.827 5.827 0 0 1 5.82-5.825a5.83 5.83 0 0 1 5.825 5.824a5.83 5.83 0 0 1-5.824 5.822z"></svg:path>`,
})
export class RaphaelFlickrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
