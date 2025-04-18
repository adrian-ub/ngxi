import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNatureOutlineIcon],svg[mdi-nature-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.08 14.22l.69-.09a4.998 4.998 0 0 0-.6-9.96c-1.33 0-2.6.53-3.54 1.46c-.93.94-1.46 2.21-1.46 3.54c0 2.47 1.79 4.52 4.16 4.92zm.92 1.9V20h6v2H5v-2h6v-3.94c-3.31-.56-5.83-3.42-5.83-6.89A7.001 7.001 0 1 1 13 16.12"></svg:path>`,
})
export class MdiNatureOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
