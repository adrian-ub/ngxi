import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungDataStoreIcon],svg[arcticons-samsung-data-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path><svg:path d="m24.39 21.52l5.79-5.883l5.79 5.883m-5.79 9.786h14.023M30.18 15.686v15.62m-18.141-4.837l5.79 5.882l5.79-5.883m-5.789 5.834v-15.62"></svg:path></svg:g>`,
})
export class ArcticonsSamsungDataStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
