import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biMinecartIcon],svg[bi-minecart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4M.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7z"></svg:path>`,
})
export class BiMinecartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
