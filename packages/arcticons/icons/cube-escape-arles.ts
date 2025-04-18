import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeArlesIcon],svg[arcticons-cube-escape-arles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zm-18.296 5.111c4.565.363 8.445-2.048 8.649-4.868c.218-3.014-3.853-5.27-7.561-5.384c-4.788-.148-9.84 2.028-8.338 5.421c.717 1.62 4.145 2.302 7.147 2.213c4.332-.129 5.857-2.768 2.641-4.241c-1.306-.599-4.335-.774-4.816.074c-.086.15-.622 1.011.88 1.475"></svg:path>`,
})
export class ArcticonsCubeEscapeArlesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
