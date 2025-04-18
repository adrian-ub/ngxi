import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrivat24Icon],svg[arcticons-privat24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.548 33.5l-.001-19L25.35 27.262h12.588m-27.875-6.468a6.294 6.294 0 1 1 12.587 0a5.87 5.87 0 0 1-1.843 4.45C18.26 27.479 10.063 33.5 10.063 33.5H22.65"></svg:path>`,
})
export class ArcticonsPrivat24Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
