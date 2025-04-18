import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatOffLineIcon],svg[ri-chat-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.808 1.393l19.799 19.8l-1.415 1.414l-3.607-3.608L6.455 19L2 22.5V4c0-.17.042-.329.116-.469l-.722-.723zM4 5.413v12.972L5.763 17h9.822zM21 3a1 1 0 0 1 1 1v13.785l-2-2V5L9.213 4.999L7.214 3z"></svg:path>`,
})
export class RiChatOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
