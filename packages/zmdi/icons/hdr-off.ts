import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHdrOffIcon],svg[zmdi-hdr-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M343 272h-8l-24-23V144h75q13 0 22.5 9.5T418 176v21q0 10-5.5 18.5T399 227l19 45h-32l-19-43h-24zm0-96v21h43v-21zm-96 0h-8l-32-32h40q13 0 22.5 9.5T279 176v41l-32-32zm-74-21l258 256l-24 23l-162-162h-72v-73l-32-32v105h-32v-53H66v53H34V144h32v43h43v-43h8L0 27L23 5z"></svg:path>`,
})
export class ZmdiHdrOffIcon {
  readonly viewBox = input("0 0 432 440")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
