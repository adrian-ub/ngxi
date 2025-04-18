import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitCornerUpLeftIcon],svg[uit-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.111 7.5H5.71l4.646-4.646a.5.5 0 0 0-.707-.707l-5.5 5.5a.5.5 0 0 0 0 .707l5.5 5.5a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.708L5.71 8.5h9.402a3.393 3.393 0 0 1 3.389 3.389V21.5a.5.5 0 1 0 1 0v-9.612a4.394 4.394 0 0 0-4.39-4.388"></svg:path>`,
})
export class UitCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
