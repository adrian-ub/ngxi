import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageTextFastIcon],svg[mdi-message-text-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm8 1h8v2h-8zm-9 3c-.6 0-1 .4-1 1s.4 1 1 1h3v-2zm9 1h5v2h-5zM1 15c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"></svg:path>`,
})
export class MdiMessageTextFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
