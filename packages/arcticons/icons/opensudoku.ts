import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpensudokuIcon],svg[arcticons-opensudoku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.92 5.5v37m20.16-37v37m8.42-28.58h-37m37 20.16h-37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.235 30.5c2.357-.123 4.125-2.24 4.125-4.6v-4.04A4.36 4.36 0 0 0 24 17.5h0a4.36 4.36 0 0 0-4.36 4.36"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.64 21.86A4.36 4.36 0 0 0 24 26.22h0a4.36 4.36 0 0 0 4.36-4.36m-7.954 7.216c.797 1.037 1.797 1.424 3.187 1.424h.641"></svg:path>`,
})
export class ArcticonsOpensudokuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
