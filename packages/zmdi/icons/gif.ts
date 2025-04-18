import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGifIcon],svg[zmdi-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 128h32v128h-32zm-54 0q10 0 16 6.5t6 14.5v11H32v64h43v-32h32v43q0 8-6 14.5T85 256H21q-9 0-15-6.5T0 235v-86q0-8 6-14.5t15-6.5zm214 32h-64v21h42v32h-42v43h-32V128h96z"></svg:path>`,
})
export class ZmdiGifIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
