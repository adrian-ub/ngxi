import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLidentitNumriqueIcon],svg[arcticons-lidentit-numrique-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.206 43.5V23.828a6.725 6.725 0 0 0-6.725-6.725H24V34.45M9.794 17.103v19.672A6.725 6.725 0 0 0 16.52 43.5H24"></svg:path><svg:circle cx="24" cy="7.581" r="3.081" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLidentitNumriqueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
