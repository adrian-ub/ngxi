import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLeekIcon],svg[mdi-leek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v3.55l2 2l2-2V2zM6.34 4L3.87 6.5L15 17.62v-4.95zm11.32 0l-4.6 4.61l2.48 2.48l4.59-4.59zM9 13.74V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.26l-2-2V20h-2v-4.26z"></svg:path>`,
})
export class MdiLeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
