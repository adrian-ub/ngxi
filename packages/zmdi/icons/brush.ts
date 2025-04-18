import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBrushIcon],svg[zmdi-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.5 235q26.5 0 45.5 18.5t19 45.5q0 35-25 60t-61 25q-24 0-47-11.5T0 341q15 0 29-11.5T43 299q0-27 18.5-45.5t45-18.5M399 35q6 6 6 15t-6 15L208 256l-59-59L340 6q7-6 15.5-6T371 6z"></svg:path>`,
})
export class ZmdiBrushIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
