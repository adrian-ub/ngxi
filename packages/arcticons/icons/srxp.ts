import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSrxpIcon],svg[arcticons-srxp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 33.08l5.8 9.42H41L29.6 24L24 14.92L18.19 5.5H7L18.4 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 14.92l5.8-9.42H41L29.6 24L24 33.08l-5.81 9.42H7L18.4 24"></svg:path>`,
})
export class ArcticonsSrxpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
