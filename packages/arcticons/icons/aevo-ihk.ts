import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAevoIhkIcon],svg[arcticons-aevo-ihk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.213 19.963l-2.712 8.189l-2.713-8.189m-6.352 4.095h2.669m1.425 4.094h-4.094v-8.189h4.094"></svg:path><svg:rect width="5.425" height="8.189" x="31.854" y="19.963" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.713" ry="2.713"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.248 25.439H11.62m-.899 2.713l2.713-8.189l2.712 8.189m.656 2.506v8.189m2.568-8.189v8.189m5.426-8.189v8.189m-5.426-4.11h5.426m2.568-4.079v8.189m0-2.853l4.401-5.309m0 8.162l-3.371-4.095"></svg:path>`,
})
export class ArcticonsAevoIhkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
