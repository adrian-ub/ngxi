import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOvPlusIcon],svg[arcticons-ov-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.218 8.018a.97.97 0 0 0-.866-.532H6.473a.972.972 0 0 0-.867 1.412L13.27 24L5.606 39.102a.972.972 0 0 0 .867 1.412h9.878a.97.97 0 0 0 .867-.532L25.328 24z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.39 8.018a.97.97 0 0 0-.866-.532h-9.879a.972.972 0 0 0-.866 1.412L30.442 24l-7.663 15.102a.972.972 0 0 0 .866 1.412h9.879a.97.97 0 0 0 .867-.532L42.5 24z"></svg:path>`,
})
export class ArcticonsOvPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
