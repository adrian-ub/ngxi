import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSupersetIcon],svg[arcticons-superset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12L11.427 24.575m25.146-.001L25.147 35.999m-9.529-7.234l12.573-12.573a5.927 5.927 0 0 1 8.382 0l4.191 4.19a5.927 5.927 0 0 1 0 8.382L29.338 40.19"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.382 20.383L19.809 32.956a5.927 5.927 0 0 1-8.382 0l-4.191-4.192a5.927 5.927 0 0 1 0-8.381L19.809 7.81"></svg:path>`,
})
export class ArcticonsSupersetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
