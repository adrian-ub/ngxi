import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCatalogueIcon],svg[hugeicons-catalogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12.4c0-3.017 0-4.525.946-5.463C3.893 6 5.416 6 8.462 6h1.076c3.047 0 4.57 0 5.516.937S16 9.383 16 12.4v3.2c0 3.017 0 4.525-.946 5.463c-.947.937-2.47.937-5.516.937H8.462c-3.046 0-4.57 0-5.516-.937S2 18.617 2 15.6z"></svg:path><svg:path d="M15.538 16h.923c2.611 0 3.917 0 4.728-.82S22 13.04 22 10.4V7.6c0-2.64 0-3.96-.811-4.78S19.072 2 16.46 2h-.923c-2.612 0-3.917 0-4.728.82c-.71.717-.799 1.817-.81 3.847M6 12h3m-3 5h5m-.5-14l4 3.5"></svg:path></svg:g>`,
})
export class HugeiconsCatalogueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
