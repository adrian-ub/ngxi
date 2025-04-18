import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightViewModuleIcon],svg[mdi-light-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6h5v6h-5zm-6 6V6h5v6zm6 7v-6h5v6zm-6 0v-6h5v6zm-6 0v-6h5v6zm0-7V6h5v6zm1-5v4h3V7zm6 0v4h3V7zm6 0v4h3V7zM4 14v4h3v-4zm6 0v4h3v-4zm6 0v4h3v-4z"></svg:path>`,
})
export class MdiLightViewModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
