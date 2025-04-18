import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBrightCrownIcon],svg[iconoir-bright-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1m14.8 3.5l1.2-7l-4.2 2.1L12 8.5l-1.8 2.1L6 8.5l1.2 7z"></svg:path>`,
})
export class IconoirBrightCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
