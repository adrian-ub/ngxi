import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGodsdjsradioIcon],svg[arcticons-godsdjsradio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.68 41.673V23.091h-7.432v-4.646h7.432v-6.504h4.645v6.504h7.432v4.646h-7.432v18.582Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.972 15.793S10.58 6.2 24.089 6.328s12.94 9.744 12.94 9.744m-.027 9.884a4.817 4.817 0 0 0 4.698-4.928a4.82 4.82 0 0 0-4.671-4.956Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.998 25.675A4.817 4.817 0 0 1 6.3 20.747a4.82 4.82 0 0 1 4.672-4.955ZM6.3 20.747h-.8m37 0h-.8"></svg:path>`,
})
export class ArcticonsGodsdjsradioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
