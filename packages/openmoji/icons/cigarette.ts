import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCigaretteIcon],svg[openmoji-cigarette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#FFF" d="M66.988 42.18H5.011A1.015 1.015 0 0 1 4 41.168v-7.642c0-.557.456-1.012 1.012-1.012h61.976c.556 0 1.012.455 1.012 1.012v7.642c0 .557-.456 1.012-1.013 1.012"></svg:path><svg:path fill="#f4aa41" d="M67 42.18H50.125c-.55 0-1-.45-1-1v-7.666c0-.55.45-1 1-1H67c.55 0 1 .45 1 1v7.666c0 .55-.45 1-1 1"></svg:path><svg:path fill="#9b9b9a" d="M10.007 42.18H4.993A.996.996 0 0 1 4 41.187v-7.68c0-.546.447-.993.993-.993h5.014c.546 0 .993.446.993.993v7.68a.996.996 0 0 1-.993.993"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M66.988 42.18H5.011A1.015 1.015 0 0 1 4 41.168v-7.642c0-.557.456-1.012 1.012-1.012h61.976c.556 0 1.012.455 1.012 1.012v7.642c0 .557-.456 1.012-1.013 1.012"></svg:path><svg:path d="M67 42.18H50.125c-.55 0-1-.45-1-1v-7.666c0-.55.45-1 1-1H67c.55 0 1 .45 1 1v7.666c0 .55-.45 1-1 1m-56.993 0H4.993A.996.996 0 0 1 4 41.187v-7.68c0-.546.447-.993.993-.993h5.014c.546 0 .993.446.993.993v7.68a.996.996 0 0 1-.993.993"></svg:path></svg:g>`,
})
export class OpenmojiCigaretteIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
