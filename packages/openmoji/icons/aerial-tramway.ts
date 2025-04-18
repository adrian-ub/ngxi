import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAerialTramwayIcon],svg[openmoji-aerial-tramway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" d="M33.429 22.514c.056.261-.474.898-.165.593a1.54 1.54 0 0 0 .43-.945a1.6 1.6 0 0 0-.807-1.61a1.5 1.5 0 1 0-1.514 2.59l.064.037l-.689-.896l.026.078v-.798l-.017.084l.385-.662a2.56 2.56 0 0 0-.64 1.032a2.8 2.8 0 0 0 .034 1.294a1.5 1.5 0 1 0 2.893-.797m8.568 2.912a1.5 1.5 0 0 0 0-3a1.5 1.5 0 0 0 0 3m-4.801-1.004a1.5 1.5 0 0 0 0-3a1.5 1.5 0 0 0 0 3m-10.969-4.388a1.61 1.61 0 0 0 1.567 2.701a1.515 1.515 0 0 0 1.048-1.845a2.72 2.72 0 0 0-1.08-1.438a1.51 1.51 0 0 0-2.053.538a1.535 1.535 0 0 0 .538 2.052a.63.63 0 0 1-.298-.355l1.047-1.845l-.094.025l1.156.15l-.08-.053l.742 1.295l-.003-.097l-.439 1.06l.07-.067a1.5 1.5 0 1 0-2.12-2.12Z"></svg:path><svg:path fill="#fcea2b" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M27 30h15v23H27z"></svg:path><svg:path fill="none" stroke="#61b2e4" stroke-linejoin="round" stroke-width="2" d="M28 50h14"></svg:path><svg:path fill="#d0cfce" stroke="#d0cfce" stroke-linejoin="round" stroke-width="1.633" d="M27 42h6v4h-6z"></svg:path><svg:path fill="#3f3f3f" stroke="#3f3f3f" stroke-linejoin="round" stroke-width="1.472" d="M27 34h6v6.5h-6z"></svg:path><svg:path fill="#d0cfce" stroke="#d0cfce" stroke-linejoin="round" stroke-width="2" d="M36 34h6v11h-6z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:rect width="4" height="4" x="30" y="20" stroke-miterlimit="10" rx="1.732" transform="rotate(9.671 32 22)"></svg:rect><svg:rect width="4" height="4" x="35" y="21" stroke-miterlimit="10" rx="1.732" transform="rotate(9.671 37 23)"></svg:rect><svg:rect width="4" height="4" x="40" y="22" stroke-miterlimit="10" rx="1.732" transform="rotate(9.667 41.998 24.003)"></svg:rect><svg:rect width="4" height="4" x="25" y="19" stroke-miterlimit="10" rx="1.732" transform="rotate(9.667 26.998 21.002)"></svg:rect><svg:path stroke-miterlimit="10" d="m12 18l48 10m-25-5v8"></svg:path><svg:path stroke-linejoin="round" d="M36 34h6v11h-6zm-9 0h6v13h-6z"></svg:path><svg:path stroke-linejoin="round" d="M27 30h15v23H27z"></svg:path></svg:g>`,
})
export class OpenmojiAerialTramwayIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
