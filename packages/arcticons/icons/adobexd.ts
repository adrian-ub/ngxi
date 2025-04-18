import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobexdIcon],svg[arcticons-adobexd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.63 14.04L17.29 24l-6.66 9.96m13.31-19.92L17.29 24l6.65 9.96m13.43-19.92v19.92"></svg:path><svg:rect width="9.96" height="12.95" x="27.41" y="21.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.98" transform="rotate(-180 32.39 27.485)"></svg:rect>`,
})
export class ArcticonsAdobexdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
