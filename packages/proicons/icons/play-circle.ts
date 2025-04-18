import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPlayCircleIcon],svg[proicons-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9.25" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path d="M8.93 13.29c0 1.098 0 1.646.23 1.964c.202.277.51.456.85.492c.391.041.867-.232 1.818-.779l2.244-1.29c.957-.55 1.435-.825 1.595-1.185c.14-.313.14-.671 0-.984c-.16-.36-.639-.635-1.595-1.184l-2.244-1.291c-.951-.547-1.427-.82-1.817-.779c-.34.036-.65.215-.85.492c-.23.318-.23.866-.23 1.963z"></svg:path></svg:g>`,
})
export class ProiconsPlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
