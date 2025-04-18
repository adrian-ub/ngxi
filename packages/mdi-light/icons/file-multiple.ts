import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFileMultipleIcon],svg[mdi-light-file-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11a3 3 0 0 1-3-3V4H8a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8zm-2-3a2 2 0 0 0 2 2h3.59L13 4.41zM8 3h5l7 7v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 21a5 5 0 0 1-5-5V7h1v12a4 4 0 0 0 4 4h8v1z"></svg:path>`,
})
export class MdiLightFileMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
