import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCpustatsIcon],svg[arcticons-cpustats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.69 31.17h8.56v7.17h0h-8.56a1.19 1.19 0 0 1-1.19-1.2v-4.78a1.19 1.19 0 0 1 1.19-1.19m8.56 0H24v7.17h-9.75zm9.75 0h9.75v7.17H24zm9.75 0h9.75v6a1.19 1.19 0 0 1-1.19 1.19h-8.56h0zM15.44 24H24v7.17h0h-9.75h0v-6A1.19 1.19 0 0 1 15.44 24M24 24h9.75v7.17H24zm9.75 0h9.75v7.17h-9.75zm-8.56-7.17h8.56V24h0H24h0v-6a1.19 1.19 0 0 1 1.19-1.17m8.56 0h9.75V24h-9.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.94 9.67h7.36a1.19 1.19 0 0 1 1.19 1.19v6h0h-9.74h0v-6a1.19 1.19 0 0 1 1.19-1.19"></svg:path>`,
})
export class ArcticonsCpustatsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
