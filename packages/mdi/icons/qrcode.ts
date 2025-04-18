import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiQrcodeIcon],svg[mdi-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h2v2H3zm8-6h2v4h-2zm-2 6h4v4h-2v-2H9zm6 0h2v2h2v-2h2v2h-2v2h2v4h-2v2h-2v-2h-4v2h-2v-4h4v-2h2v-2h-2zm4 8v-4h-2v4zM15 3h6v6h-6zm2 2v2h2V5zM3 3h6v6H3zm2 2v2h2V5zM3 15h6v6H3zm2 2v2h2v-2z"></svg:path>`,
})
export class MdiQrcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
