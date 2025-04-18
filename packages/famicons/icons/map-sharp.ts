import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsMapSharpIcon],svg[famicons-map-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M327.71 130.93L184 39L32 144v336l152.29-98.93L328 473l152-105V32ZM312 421l-112-72V91l112 72Z"></svg:path>`,
})
export class FamiconsMapSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
