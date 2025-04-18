import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPyramidFilledIcon],svg[tdesign-pyramid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 2.96l4.44 7.893l1.06-1.928L23.693 22H.291zM12.693 20h2.809v-3h-1.159zm4.809 0h2.809l-1.65-3H17.5zm.059-5l-1.06-1.925L15.443 15z"></svg:path>`,
})
export class TdesignPyramidFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
