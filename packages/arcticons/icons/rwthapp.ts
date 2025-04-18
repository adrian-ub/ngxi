import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRwthappIcon],svg[arcticons-rwthapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 27.776V19.91h2.575c1.456 0 2.636 1.183 2.636 2.642s-1.18 2.642-2.636 2.642H9.5m14.585-5.049l-1.966 7.866l-1.967-7.866l-1.966 7.866l-1.967-7.866m9.878.079h5.211m-2.605 7.866v-7.866m4.586-.084v7.866M38.5 20.14v7.866m-5.211-3.948H38.5m-26.831 1.173l2.575 2.58"></svg:path>`,
})
export class ArcticonsRwthappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
