import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsVideoClipIcon],svg[proicons-video-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="15.5" x="2.75" y="4.25" stroke-linecap="round" stroke-linejoin="round" rx="3.5"></svg:rect><svg:path d="M8.83 13.29c0 1.098 0 1.646.23 1.964c.201.277.51.456.85.492c.391.041.867-.232 1.818-.779l2.244-1.29c.956-.55 1.435-.825 1.595-1.185a1.2 1.2 0 0 0 0-.984c-.16-.36-.639-.635-1.595-1.184l-2.244-1.291c-.951-.547-1.427-.82-1.817-.779c-.34.036-.65.215-.85.492c-.231.318-.231.866-.231 1.963z"></svg:path></svg:g>`,
})
export class ProiconsVideoClipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
