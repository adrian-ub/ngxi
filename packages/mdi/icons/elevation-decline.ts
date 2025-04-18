import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiElevationDeclineIcon],svg[mdi-elevation-decline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H3v-9.75L9.45 15l3.77-2.2L21 17.29zM3 8.94V6.75l6.45 3.75l3.77-2.2L21 12.79V15l-7.78-4.5l-3.77 2.17z"></svg:path>`,
})
export class MdiElevationDeclineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
