import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPolestarIcon],svg[arcticons-polestar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.113 27.568l3.05 13.099l.837-.556V24H5.5l.208.541zM24 24l-3.887 3.568m7.774-7.136l-3.05-13.099l-.837.556V24h18.5l-.208-.541zM24 24l3.887-3.568"></svg:path>`,
})
export class ArcticonsPolestarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
