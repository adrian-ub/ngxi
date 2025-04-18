import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiListNumberedRtlIcon],svg[ooui-list-numbered-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15h11v2H2zm0-6h11v2H2zm0-6h11v2H2zm15-2h-1v1h1v4h1V1zm-2 12v1h2v1h-1v1h1v1h-2v1h3v-5zm0-6v1h2v1h-1.5c-.3 0-.5.2-.5.5V12h3v-1h-2v-1h1.5c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z"></svg:path>`,
})
export class OouiListNumberedRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
