import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCursor2Icon],svg[carbon-cursor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.34 12.06l-22-8a1 1 0 0 0-1.28 1.28l8 22A1 1 0 0 0 13 28a1 1 0 0 0 .93-.63l3.84-9.6l9.6-3.84a1 1 0 0 0 0-1.87Zm-10.71 4l-.4.16l-.16.4L13 24.2L6.67 6.67L24.2 13Z"></svg:path>`,
})
export class CarbonCursor2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
