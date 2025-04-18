import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixShorterIcon],svg[ix-shorter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 384h42.666V128h-42.666zM192 255.36l-84.693 85.76l-30.294-30.293l33.067-33.067H42.667v-43.947h67.413L77.013 200.96l30.294-30.293zm212.693-84.693L320 256.427l84.693 84.693l30.294-30.293l-33.067-33.067h67.413v-43.947H401.92l33.067-32.853z"></svg:path>`,
})
export class IxShorterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
