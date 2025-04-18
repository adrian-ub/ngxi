import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNatureIcon],svg[mdi-nature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16.12a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7a7 7 0 0 0-7 7c0 3.47 2.52 6.33 5.83 6.89V20H5v2h14v-2h-6z"></svg:path>`,
})
export class MdiNatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
