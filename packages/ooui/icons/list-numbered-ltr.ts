import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiListNumberedLtrIcon],svg[ooui-list-numbered-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h12v2H7zm0-6h12v2H7zm0-6h12v2H7zM2 6h1V1H1v1h1zm1 9v1H2v1h1v1H1v1h3v-5H1v1zM1 8v1h2v1H1.5a.5.5 0 0 0-.5.5V13h3v-1H2v-1h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class OouiListNumberedLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
