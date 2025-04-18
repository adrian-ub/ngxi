import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchAccess3SharpIcon],svg[material-symbols-light-switch-access-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.077 15.154l-.688-.708l1.94-1.946H3v-1h8.329l-1.94-1.946l.688-.708L13.231 12zM3 9.116V6.212h2.904v2.904zm0 8.653v-2.884h2.904v2.884zM10.596 21v-3.002L16.594 12l-5.998-5.998V3H21v4.817h.962v3.654H21V21z"></svg:path>`,
})
export class MaterialSymbolsLightSwitchAccess3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
