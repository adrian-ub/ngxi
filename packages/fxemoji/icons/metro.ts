import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiMetroIcon],svg[fxemoji-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="256" fill="#2B3B47"></svg:circle><svg:path fill="#FF473E" d="M96 64h320v368H96z"></svg:path><svg:path fill="#F9F9F7" d="M104 72h304v224H104z"></svg:path><svg:path fill="#FFD469" d="M207 340c0 11.046-8.954 20-20 20s-20-8.954-20-20s8.954-20 20-20s20 8.954 20 20m116-20c-11.046 0-20 8.954-20 20s8.954 20 20 20s20-8.954 20-20s-8.954-20-20-20"></svg:path><svg:path fill="#E5E4DF" d="M192.12 432h32l-14.854 59.414a238.3 238.3 0 0 1-57.386-19.175zM320 432h-32l14.854 59.414a238.3 238.3 0 0 0 57.386-19.175z"></svg:path><svg:path fill="#132028" d="M396 280H116V136h280zM353 88H161v32h192zm-33 312H192v32h128z"></svg:path>`,
})
export class FxemojiMetroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
