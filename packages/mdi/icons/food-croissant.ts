import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFoodCroissantIcon],svg[mdi-food-croissant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19l-3-2l3-2zm-7-4l4-6l3 4l-4 3zM5 17l-3 2v-4zm4-2l-3 1l-4-3l3-4zm5-9l4 2l-5 7h-2L6 8l4-2z"></svg:path>`,
})
export class MdiFoodCroissantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
