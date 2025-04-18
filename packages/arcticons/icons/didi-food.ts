import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDidiFoodIcon],svg[arcticons-didi-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.17 15.92V8.588H4.5v11.323c0 10.752 8.748 19.5 19.5 19.5s19.5-8.748 19.5-19.5v-3.993zm-.001 3.991c0 6.71-5.46 12.17-12.17 12.17s-12.168-5.46-12.168-12.17V15.92H36.17z"></svg:path>`,
})
export class ArcticonsDidiFoodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
