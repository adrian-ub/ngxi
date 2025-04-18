import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettingsInputHdmiIcon],svg[material-symbols-settings-input-hdmi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22v-3l-3-6V7h1V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v3h1v6l-3 6v3zM8 7h2V5h1v2h2V5h1v2h2V4H8z"></svg:path>`,
})
export class MaterialSymbolsSettingsInputHdmiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
