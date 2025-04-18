import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCradleIcon],svg[mdi-cradle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-6V4H8C5.8 4 4 5.8 4 8v6c0 1.1.9 2 2 2h2v2.9c-.6-.4-1.2-.8-1.7-1.3L4.9 19c1.8 1.9 4.3 3 7.1 3s5.3-1.1 7.1-2.9l-1.4-1.4c-.5.5-1 .9-1.6 1.3v-3h2c1.1 0 2-.9 2-2v-3c-.1-1.1-1-2-2.1-2m-4 10.8c-.6.2-1.3.2-2 .2s-1.4-.1-2-.2V16h4z"></svg:path>`,
})
export class MdiCradleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
