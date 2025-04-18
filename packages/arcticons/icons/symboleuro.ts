import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSymboleuroIcon],svg[arcticons-symboleuro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.48 34.27a9 9 0 0 1-6.93 3.23h0a9 9 0 0 1-9-9v-8.9a9 9 0 0 1 9.05-9h0a9 9 0 0 1 7 3.26m-20.43 6.86H22.6m-11.43 6.63H22.6"></svg:path>`,
})
export class ArcticonsSymboleuroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
