import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphElevatorUpIcon],svg[si-glyph-elevator-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5.482 13.986H2.334C1.598 13.986 1 13.236 1 12.5s.598-1.44 1.334-1.44h2.143l8.041-6.043h3.148c.736 0 1.334.704 1.334 1.441c0 .735-.598 1.523-1.334 1.523h-2.184z"></svg:path><svg:g transform="translate(5 1)"><svg:ellipse cx="1.438" cy="1.479" rx="1.438" ry="1.479"></svg:ellipse><svg:path d="M3.924 4.155a.327.327 0 0 0-.471-.045l-.889.771c-.201-.5-.676-.85-1.231-.85c-.736 0-1.334.618-1.334 1.384v2.584L3.88 4.644a.36.36 0 0 0 .044-.489"></svg:path></svg:g></svg:g>`,
})
export class SiGlyphElevatorUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
