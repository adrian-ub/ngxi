import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEnquireIcon],svg[icon-park-solid-enquire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-miterlimit="2" d="M37 16a5 5 0 1 1 0-10a5 5 0 0 1 0 10Zm-25-4a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m26 39l6-5v-6c0-3.466 2-6 5-6s5 2.534 5 6v14m-18-9l-6-5v-4c0-3.466-2-6-5-6s-5 2.534-5 6v18"></svg:path></svg:g>`,
})
export class IconParkSolidEnquireIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
