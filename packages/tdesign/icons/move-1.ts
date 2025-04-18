import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMove1Icon],svg[tdesign-move-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.086 12L5.5 7.586L6.914 9l-2 2H11V4.914l-2 2L7.586 5.5L12 1.086L16.414 5.5L15 6.914l-2-2V11h6.086l-2-2L18.5 7.586L22.914 12L18.5 16.414L17.086 15l2-2H13v6.086l2-2l1.414 1.414L12 22.914L7.586 18.5L9 17.086l2 2V13H4.914l2 2L5.5 16.414z"></svg:path>`,
})
export class TdesignMove1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
