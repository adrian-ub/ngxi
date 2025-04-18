import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraIndoorIcon],svg[material-symbols-light-camera-indoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20V9.5l7-5.27l7 5.27V20zm4.154-3.384h4q.262 0 .438-.177q.177-.177.177-.439v-1.461l1.846.972V12.49l-1.846.973V12q0-.261-.177-.438t-.438-.177h-4q-.262 0-.438.177q-.177.177-.177.438v4q0 .262.177.439q.176.177.438.177"></svg:path>`,
})
export class MaterialSymbolsLightCameraIndoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
