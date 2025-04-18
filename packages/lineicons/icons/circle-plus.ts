import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCirclePlusIcon],svg[lineicons-circle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.2 29.7h-8v-7.9c0-1.2-1-2.2-2.3-2.2c-1.2 0-2.2 1-2.2 2.3v7.9h-7.9c-1.2 0-2.2 1-2.2 2.3c0 1.2 1 2.2 2.3 2.2h7.9v7.9c0 1.2 1 2.2 2.3 2.2c1.2 0 2.2-1 2.2-2.3v-7.9h7.9c1.2 0 2.2-1 2.2-2.3c0-1.2-1-2.2-2.2-2.2"></svg:path><svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32s13.6 30.3 30.3 30.3S62.4 48.7 62.4 32C62.3 15.3 48.7 1.8 32 1.8m0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3S57.8 17.8 57.8 32S46.2 57.8 32 57.8"></svg:path>`,
})
export class LineiconsCirclePlusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
