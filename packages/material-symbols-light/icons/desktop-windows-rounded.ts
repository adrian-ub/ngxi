import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDesktopWindowsRoundedIcon],svg[material-symbols-light-desktop-windows-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-2H4.616q-.691 0-1.153-.462T3 15.385v-9.77q0-.69.463-1.152T4.615 4h14.77q.69 0 1.152.463T21 5.616v9.769q0 .69-.463 1.153T19.385 17H13v2h1.5q.214 0 .357.143T15 19.5t-.143.357T14.5 20h-5q-.213 0-.357-.143T9 19.5t.143-.357T9.5 19z"></svg:path>`,
})
export class MaterialSymbolsLightDesktopWindowsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
