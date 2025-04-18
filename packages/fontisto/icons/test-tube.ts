import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoTestTubeIcon],svg[fontisto-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.585 0H0v1.958h.73v17.978a4.063 4.063 0 1 0 8.126 0V1.958h.73zm-1.92 19.938a2.87 2.87 0 0 1-5.738.004v-1.044H3.9v-1.15H1.927v-2.025H3.9v-1.178H1.927V12.52H3.9v-1.178H1.927V9.317H3.9v-1.15H1.927V6.142H3.9v-1.15H1.927v-3.05h5.738zM13.129 0v1.958h.73v17.978a4.063 4.063 0 1 0 8.126 0V1.958h.73V0zm7.663 10.49h-5.737V9.326h1.973v-1.15h-1.973V6.151h1.973v-1.15h-1.973v-3.05h5.737z"></svg:path>`,
})
export class FontistoTestTubeIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
