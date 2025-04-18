import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeveloperModeIcon],svg[material-symbols-light-developer-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.6 15.87L4.73 12L8.6 8.13l.708.72L6.158 12l3.15 3.15zM6 17h1v1.5h10V17h1v3.385q0 .69-.462 1.152T16.384 22H7.616q-.691 0-1.153-.462T6 20.385zM7 7H6V3.616q0-.691.463-1.153T7.616 2h8.769q.69 0 1.152.463T18 3.616V7h-1V5.5H7zm8.4 8.87l-.708-.72l3.15-3.15l-3.15-3.15l.708-.72L19.27 12z"></svg:path>`,
})
export class MaterialSymbolsLightDeveloperModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
