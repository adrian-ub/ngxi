import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBenotesIcon],svg[arcticons-benotes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24C2.5 12.1 12.1 2.5 24 2.5S45.5 12.1 45.5 24S35.9 45.5 24 45.5S2.5 35.9 2.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 22.443h5.75v-6.828H12.5zm0 9.942h5.75v-6.828H12.5zm8.625 0h5.75v-6.828h-5.75zm8.625 0h5.75v-6.828h-5.75zm-8.625-9.942h5.75v-6.828h-5.75zm8.625-6.828v6.828h5.75v-6.828z"></svg:path>`,
})
export class ArcticonsBenotesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
