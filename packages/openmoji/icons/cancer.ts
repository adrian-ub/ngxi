import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCancerIcon],svg[openmoji-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v47.83H12z"></svg:path><svg:g fill="none" stroke="#000"><svg:path stroke-miterlimit="10" stroke-width="3" d="M33.61 30.26a5.559 5.559 0 1 1-5.559-5.558a5.56 5.56 0 0 1 5.559 5.558z"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M25.7 25.26s10.84-4.787 23.81 3.012"></svg:path><svg:path stroke-miterlimit="10" stroke-width="3" d="M38.39 41a5.559 5.559 0 1 1 5.56 5.56A5.56 5.56 0 0 1 38.39 41z"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M46.3 46s-10.84 4.787-23.81-3.012"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12h48v48H12z"></svg:path></svg:g>`,
})
export class OpenmojiCancerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
