import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoodrxIcon],svg[arcticons-goodrx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37 18.5h-7.5V11a5.5 5.5 0 0 0-11 0v7.5H11a5.5 5.5 0 0 0 0 11h7.5V37a5.5 5.5 0 0 0 11 0v-7.5H37a5.5 5.5 0 0 0 0-11m-7.5 11h-11m0-11v11"></svg:path>`,
})
export class ArcticonsGoodrxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
