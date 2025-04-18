import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSofabatonIcon],svg[arcticons-sofabaton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.446 9.315c2.787-.092 5.46.25 6.949 5.044M13.207 4.52c6.116-.28 10.743 2.3 12.89 9.647M20.32 22.28h15.801c1.677 0 2.846 1.338 2.62 3l-2.06 15.22c-.226 1.662-1.758 3-3.435 3h-21.36c-1.677 0-2.878-1.342-2.62-3l4.248-27.384h5.366l-3.462 25.08l16.918-.033l1.662-11.334l-14.27-.087z"></svg:path>`,
})
export class ArcticonsSofabatonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
