import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsStarFillIcon],svg[lineicons-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m59.7 23.9l-18.1-2.8l-8.2-17.2c-.6-1.2-2.2-1.2-2.8 0l-8.2 17.3l-18 2.7c-1.3.2-1.8 1.9-.8 2.8l13.1 13.5l-3.1 18.9c-.2 1.3 1.1 2.4 2.3 1.6l16.3-8.9l16.2 8.9c1.1.6 2.5-.4 2.2-1.6l-3.1-18.9l13.1-13.5c.8-.9.4-2.6-.9-2.8"></svg:path>`,
})
export class LineiconsStarFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
