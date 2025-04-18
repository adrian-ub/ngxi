import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRedoIcon],svg[bx-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h3v-2H9c-1.654 0-3-1.346-3-3s1.346-3 3-3h6v3l5-4l-5-4v3H9c-2.757 0-5 2.243-5 5s2.243 5 5 5"></svg:path>`,
})
export class BxRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
