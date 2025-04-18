import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFddbIcon],svg[arcticons-fddb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.95 24.514c-.854 3.953-.67 7.905.133 11.86m21.89-10.43L21.234 36.872m0 0L6.362 24.17c-1.071-.916-1.781-2.203-1.86-5.12c-.055-2.157.848-3.17 1.909-3.406m37.089 1.28l-16.503-5.796l-20.681 4.55a2.72 2.72 0 0 1 2.153.385l13.061 8.645m0 0l21.97-7.783m-.132 8.82l-.395.198c-1.46-2.56-.947-8.833.527-9.02"></svg:path>`,
})
export class ArcticonsFddbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
