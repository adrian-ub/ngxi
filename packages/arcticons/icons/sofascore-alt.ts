import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSofascoreAltIcon],svg[arcticons-sofascore-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.1 23.7v-7.3c0-1.2 1-2.1 2.2-2.1h19.4c1.2 0 2.2 1 2.2 2.1v7.3"></svg:path><svg:path stroke-miterlimit="10" d="M13 29.5c-.5 0-.9-.4-.9-.9v-5c0-.5-.4-.9-.9-.9H7.4c-1.9 0-3.3 1.3-2.9 2.4c1 2.4 4.2 9.3 4.2 9.3c.4.8 1.4 1.2 2 1.2h25.8c1.2 0 2.3-.5 2.7-1.2c0 0 3.2-7 4.2-9.3c.4-1-.9-2.4-2.9-2.4h-3.8c-.5 0-.9.4-.9.9v5c0 .5-.4.9-.9.9z"></svg:path></svg:g>`,
})
export class ArcticonsSofascoreAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
