import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCrehanaIcon],svg[simple-icons-crehana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.371 0 0 5.371 0 12c0 6.626 5.371 12 12 12s12-5.374 12-12c0-6.629-5.374-12-12-12m5.94 9.843v7.915h-3.957v-3.892h-3.895v3.83H6.13v-3.957h3.833V9.843H6.06V5.948h3.957v3.895h3.965V5.948h3.957v3.895z"></svg:path>`,
})
export class SimpleIconsCrehanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
