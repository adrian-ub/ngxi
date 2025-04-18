import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBancaMovilBacIcon],svg[arcticons-banca-movil-bac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.506 33.137L38.5 42.5h-33V12.426L28.373 5.5v27.637h8.597l5.53-9.578l-14.127-10.837m0 20.415L20.92 42.5m7.453-27.788L5.5 25.245m22.873-1.321L5.5 39.85"></svg:path>`,
})
export class ArcticonsBancaMovilBacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
