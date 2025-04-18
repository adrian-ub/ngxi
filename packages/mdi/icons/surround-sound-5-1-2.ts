import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound512Icon],svg[mdi-surround-sound-5-1-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7v2h4v2h-2c-1.1 0-2 .9-2 2v4h6v-2h-4v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 17H7v-2h2zM9 7v2h2v8h2V7zM0 7v6h4v2H0v2h4c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H2V9h4V7zm17 10h-2v-2h2z"></svg:path>`,
})
export class MdiSurroundSound512Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
