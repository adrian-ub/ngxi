import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCutIcon],svg[proicons-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.651 14.43a3.75 3.75 0 1 0-4.302 6.143a3.75 3.75 0 0 0 4.302-6.144m0 0l3.35-4.446m5.45-7.235l-3.82 5.069m1.718 6.611a3.75 3.75 0 1 1 4.302 6.144a3.75 3.75 0 0 1-4.302-6.144m0 0L12 9.984M6.55 2.749L12 9.984"></svg:path>`,
})
export class ProiconsCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
