import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsIphoneIcon],svg[ls-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 0h265c42 0 76 34 76 76v616c0 42-34 76-76 76H76c-42 0-76-34-76-76V76C0 34 34 0 76 0M49 617h319V144H49zm159 105c24 0 42-18 42-41c0-24-18-42-42-42c-23 0-41 18-41 42c0 23 18 41 41 41"></svg:path>`,
})
export class LsIphoneIcon {
  readonly viewBox = input("0 0 417 768")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
