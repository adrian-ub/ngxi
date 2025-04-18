import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMv1x1Icon],svg[flag-mv-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d21034" d="M0 0h512v512H0z"></svg:path><svg:path fill="#007e3a" d="M128 128h256v256H128z"></svg:path><svg:circle cx="288" cy="256" r="85.3" fill="#fff"></svg:circle><svg:ellipse cx="308.6" cy="256" fill="#007e3a" rx="73.9" ry="85.3"></svg:ellipse>`,
})
export class FlagMv1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
