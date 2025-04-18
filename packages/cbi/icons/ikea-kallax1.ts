import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiIkeaKallax1Icon],svg[cbi-ikea-kallax1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.084 18.862v-3.159l-5.451-.639V6.567l-5.828-.339l.054 11.425ZM22 3.98L8.655 3.258L2 4.537v14.55l14.513 1.655L22 17.507Zm-6.657 15.3l-11.96-1.318l.008-12l12.032.752z"></svg:path>`,
})
export class CbiIkeaKallax1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
