import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWebullIcon],svg[arcticons-webull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.738 13.561c-1.184 9.253 11.94 11.065 17.115 11.023c6.313-.05 18.604-2.412 17.402-10.918c7.503 10.272-5.23 21.097-17.109 20.765c-12.135-.339-24.91-8.676-17.408-20.87"></svg:path>`,
})
export class ArcticonsWebullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
