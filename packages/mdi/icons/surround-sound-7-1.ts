import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound71Icon],svg[mdi-surround-sound-7-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-2v-2h2zm6-10v10h-2V9h-2V7zM4 17l4-8H4V7h6v2l-4 8"></svg:path>`,
})
export class MdiSurroundSound71Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
