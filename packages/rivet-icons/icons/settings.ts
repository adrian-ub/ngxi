import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsSettingsIcon],svg[rivet-icons-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v7.268a2 2 0 1 1-2 0V0zm0 12v4H2v-4zm5-9.732V0H7v2.268a2 2 0 1 0 2 0M9 16V7H7v9zm5-8.732V0h-2v7.268a2 2 0 1 0 2 0M14 16v-4h-2v4z"></svg:path>`,
})
export class RivetIconsSettingsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
