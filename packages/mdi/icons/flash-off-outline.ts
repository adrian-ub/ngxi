import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlashOffOutlineIcon],svg[mdi-flash-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 6.19l-2-2V2h10l-3.5 7H17l-1.82 3.37l-3.75-3.75L13.76 4H9zm10 12.54L17.73 20l-4.32-4.32L10 22v-8H7V9.27l-5-5L3.27 3z"></svg:path>`,
})
export class MdiFlashOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
