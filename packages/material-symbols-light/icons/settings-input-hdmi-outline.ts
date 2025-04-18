import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSettingsInputHdmiOutlineIcon],svg[material-symbols-light-settings-input-hdmi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21v-2.346l-3-6.038V7.212h1v-2.5q0-.73.463-1.22Q7.925 3 8.616 3h6.769q.69 0 1.153.491q.462.492.462 1.22v2.5h1v5.405l-3 6.038V21zM8 7.212h2.116V5.077h.769v2.135h2.23V5.077h.77v2.135H16v-2.5q0-.308-.173-.51T15.385 4h-6.77q-.269 0-.442.202T8 4.712zM10 20h4v-1.616l3-6.038V8.211H7v4.135l3 6.038zm2-7.654"></svg:path>`,
})
export class MaterialSymbolsLightSettingsInputHdmiOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
