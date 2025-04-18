import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCuprumpdfIcon],svg[arcticons-cuprumpdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.09 30V18h2.037a6 6 0 0 1 6 6h0a6 6 0 0 1-6 6zm12.393-11.964h5.982m-5.982 5.982h3.9m-3.9-5.982V30m-22.948-.031V18.004h4.018a4.018 4.018 0 0 1 0 8.037H9.535"></svg:path>`,
})
export class ArcticonsCuprumpdfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
