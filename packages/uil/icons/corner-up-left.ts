import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCornerUpLeftIcon],svg[uil-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.69 6.63h-7l2.92-2.92a1 1 0 0 0 0-1.42a1 1 0 0 0-1.41 0L4.61 6.92a1 1 0 0 0-.22.33a1 1 0 0 0 0 .76a1.2 1.2 0 0 0 .22.33L9.24 13a1 1 0 0 0 .7.3a1 1 0 0 0 .71-1.71L7.73 8.63h7a3 3 0 0 1 3 3V21a1 1 0 0 0 2 0v-9.37a5 5 0 0 0-5.04-5"></svg:path>`,
})
export class UilCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
