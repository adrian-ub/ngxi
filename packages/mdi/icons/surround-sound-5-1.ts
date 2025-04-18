import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound51Icon],svg[mdi-surround-sound-5-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-2v-2h2zm6-10v10h-2V9h-2V7zM10 7v2H6v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4v-2h4v-2H4V7z"></svg:path>`,
})
export class MdiSurroundSound51Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
