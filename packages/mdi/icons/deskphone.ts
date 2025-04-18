import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDeskphoneIcon],svg[mdi-deskphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m10 2v14h4V5zM5 5v4h8V5zm0 6v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm-6 3v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm0 3v2h2v-2zm-3 0v2h2v-2zm-3 0v2h2v-2z"></svg:path>`,
})
export class MdiDeskphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
