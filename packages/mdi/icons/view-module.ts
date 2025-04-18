import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewModuleIcon],svg[mdi-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v6h5V5m-11 6h5V5h-5m6 13h5v-6h-5m-6 6h5v-6h-5m-6 6h5v-6H4m0-1h5V5H4z"></svg:path>`,
})
export class MdiViewModuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
