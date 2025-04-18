import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feExpandIcon],svg[fe-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4h6v6l-2-2l-4 4l-2-2l4-4zm-4 16H4v-6l2 2l4-4l2 2l-4 4z"></svg:path>`,
})
export class FeExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
