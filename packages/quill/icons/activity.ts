import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillActivityIcon],svg[quill-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16h6l4-11l6 22l4-11h6"></svg:path>`,
})
export class QuillActivityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
