import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStarFillIcon],svg[mage-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#mageStarFill0)"><svg:path fill="currentColor" d="M21.95 10.605a1.75 1.75 0 0 1-.5.86l-3.3 3.22a.4.4 0 0 0-.08.12a.3.3 0 0 0 0 .14l.78 4.56c.065.336.03.684-.1 1a1.65 1.65 0 0 1-.61.77a1.83 1.83 0 0 1-.92.35h-.13a1.8 1.8 0 0 1-.84-.21l-4.1-2.14a.28.28 0 0 0-.28 0l-4.1 2.15a1.9 1.9 0 0 1-1 .21a1.83 1.83 0 0 1-.93-.35a1.75 1.75 0 0 1-.61-.78a1.8 1.8 0 0 1-.1-1l.78-4.55a.23.23 0 0 0 0-.14a.4.4 0 0 0-.07-.12l-3.3-3.24a1.8 1.8 0 0 1-.49-.85a1.75 1.75 0 0 1 0-1a1.81 1.81 0 0 1 1.49-1.21l4.5-.66a.18.18 0 0 0 .12-.05a.3.3 0 0 0 .09-.11l2.1-4.18c.143-.3.369-.553.65-.73a1.79 1.79 0 0 1 2.57.74l2.08 4.16a.4.4 0 0 0 .1.12a.2.2 0 0 0 .13.05l4.57.66c.332.05.644.192.9.41c.251.217.441.496.55.81c.106.32.124.662.05.99"></svg:path></svg:g><svg:defs><svg:clippath id="mageStarFill0"><svg:path fill="#fff" d="M2 2.395h20v19.21H2z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
