import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaps2Icon],svg[arcticons-maps-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.142 39.93l-12.751 2.8c-1.582.347-2.9-1.231-2.274-2.725L22.155 6.45c.685-1.638 3.005-1.638 3.69 0l14.038 33.555c.625 1.493-.692 3.072-2.274 2.725l-12.751-2.8a4 4 0 0 0-1.716 0"></svg:path>`,
})
export class ArcticonsMaps2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
