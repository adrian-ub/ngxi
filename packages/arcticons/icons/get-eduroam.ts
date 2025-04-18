import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGetEduroamIcon],svg[arcticons-get-eduroam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.277 38.951a7.428 7.428 0 1 1-12.41-8.165"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 34.869a7.428 7.428 0 1 0-14.856 0zm-25.758 2.956c-1.475-10.627 5.224-22.85 20.485-21.376"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.798 37.825C3.441 20.572 15.154 3.902 37.227 5.773"></svg:path>`,
})
export class ArcticonsGetEduroamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
