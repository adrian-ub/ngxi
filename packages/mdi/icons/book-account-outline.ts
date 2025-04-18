import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookAccountOutlineIcon],svg[mdi-book-account-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-5v5l-2.5-2.3L8 9V4H6v16h12m-5-9a2 2 0 1 1-2 2a2 2 0 0 1 2-2m4 8H9v-1c0-1.33 2.67-2 4-2s4 .67 4 2z"></svg:path>`,
})
export class MdiBookAccountOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
