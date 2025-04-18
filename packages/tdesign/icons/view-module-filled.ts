import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignViewModuleFilledIcon],svg[tdesign-view-module-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13v8h5.996v-8zm7.996 8H23v-8h-6.004zM23 11V3h-6.004v8zm-8.004-8H9v8h5.996zM7 3H1v8h6zM1 13h6v8H1z"></svg:path>`,
})
export class TdesignViewModuleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
