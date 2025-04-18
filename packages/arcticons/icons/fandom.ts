import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFandomIcon],svg[arcticons-fandom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.92 35.46l-7.45 7.45c-.38.38-.88.59-1.41.59h-8.2c-.53 0-1.04-.21-1.41-.59l-7.44-7.44c-.38-.38-.59-.88-.59-1.41V15.89l6.56 6.56V4.5L37 24.52c.38.38.59.9.59 1.43l-.07 8.12c0 .52-.21 1.03-.59 1.4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.71 38.14l6.05-6.05v-3.82l-3.17-3.17L24 28.69l-3.59-3.59l-3.17 3.17v3.82l6.05 6.05c.39.39 1.02.39 1.41 0Z"></svg:path>`,
})
export class ArcticonsFandomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
