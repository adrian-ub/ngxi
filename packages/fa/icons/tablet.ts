import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faTabletIcon],svg[fa-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1280q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m384-160V160q0-13-9.5-22.5T992 128H160q-13 0-22.5 9.5T128 160v960q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5m128-960v1088q0 66-47 113t-113 47H160q-66 0-113-47T0 1248V160Q0 94 47 47T160 0h832q66 0 113 47t47 113"></svg:path>`,
})
export class FaTabletIcon {
  readonly viewBox = input("0 0 1152 1408")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
