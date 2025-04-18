import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZenmoneyIcon],svg[arcticons-zenmoney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.874 2.54A21.5 21.5 0 0 1 40.47 37.78m-2.65 2.649a21.5 21.5 0 0 1-22.906 3.016m-3.246-1.874a21.5 21.5 0 0 1-8.842-13.878M2.5 23.959a21.5 21.5 0 0 1 3.888-12.332m2.409-2.871a21.5 21.5 0 0 1 13.329-6.215"></svg:path>`,
})
export class ArcticonsZenmoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
