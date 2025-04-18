import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCabinAFrameIcon],svg[mdi-cabin-a-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4 21h16zM9 19H7.08L9 14.67zm4 0h-2v-5h2zm-2.81-7L12 7.92L13.81 12zM15 14.67L16.92 19H15z"></svg:path>`,
})
export class MdiCabinAFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
