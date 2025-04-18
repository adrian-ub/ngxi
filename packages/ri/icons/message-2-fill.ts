import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMessage2FillIcon],svg[ri-message-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM7 10v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class RiMessage2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
