import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCursorBoldIcon],svg[ph-cursor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.15 179.17l-46.83-46.82l37.93-13.51l.76-.3a20 20 0 0 0-1.76-37.27L54.16 29A20 20 0 0 0 29 54.16l52.27 160.08a20 20 0 0 0 37.27 1.76c.11-.25.21-.5.3-.76l13.51-37.92l46.83 46.82a20 20 0 0 0 28.28 0l16.69-16.68a20 20 0 0 0 0-28.29m-30.83 25.17l-48.48-48.48A20 20 0 0 0 130.7 150a20.7 20.7 0 0 0-3.74.35A20 20 0 0 0 112.35 162c-.11.25-.21.5-.3.76L100.4 195.5L54.29 54.29l141.21 46.1l-32.71 11.66c-.26.09-.51.19-.76.3a20 20 0 0 0-6.17 32.48l48.49 48.48Z"></svg:path>`,
})
export class PhCursorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
