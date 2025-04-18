import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilVuejsIcon],svg[uil-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.03 2.443h-3.643L12.013 6.4L9.63 2.444l-2.646-.001H.831L12.03 21.558L23.168 2.443Zm-6.005 15.15L4.322 4.443h2.824l4.885 8.406l4.847-8.407h2.81Z"></svg:path>`,
})
export class UilVuejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
