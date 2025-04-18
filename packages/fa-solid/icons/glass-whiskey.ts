import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidGlassWhiskeyIcon],svg[fa-solid-glass-whiskey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 32H32C12.5 32-2.4 49.2.3 68.5l56 356.5c4.5 31.5 31.5 54.9 63.4 54.9h273c31.8 0 58.9-23.4 63.4-54.9l55.6-356.5C514.4 49.2 499.5 32 480 32m-37.4 64l-30 192h-313L69.4 96z"></svg:path>`,
})
export class FaSolidGlassWhiskeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
