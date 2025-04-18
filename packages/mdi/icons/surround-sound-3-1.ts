import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound31Icon],svg[mdi-surround-sound-3-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-2v-2h2zm6-10v10h-2V9h-2V7zm-10 8c0 1.1-.9 2-2 2H4v-2h4v-2H6v-2h2V9H4V7h4c1.1 0 2 .9 2 2v1.5c0 .8-.7 1.5-1.5 1.5c.8 0 1.5.7 1.5 1.5z"></svg:path>`,
})
export class MdiSurroundSound31Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
