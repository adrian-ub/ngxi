import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowTopLeftIcon],svg[lineicons-arrow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.9 51.3c-.6 0-1.2-.2-1.6-.7L17.2 20.5l-.2 24c0 1.2-1 2.3-2.3 2.2c-1.2 0-2.2-1-2.2-2.3l.3-29.4c0-1.2 1-2.2 2.2-2.2l29.5-.3c1.2 0 2.2 1 2.2 2.2s-1 2.3-2.2 2.3l-24.2.2l30.2 30.2c.9.9.9 2.3 0 3.2c-.4.4-1 .7-1.6.7"></svg:path>`,
})
export class LineiconsArrowTopLeftIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
