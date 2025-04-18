import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faViacoinIcon],svg[fa-viacoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1536 0l-192 448h192v192h-274l-55 128h329v192h-411l-357 832l-357-832H0V768h329l-55-128H0V448h192L0 0h256l323 768h378L1280 0zM768 1216l108-256H660z"></svg:path>`,
})
export class FaViacoinIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
