import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOctahedronPlusIcon],svg[tabler-octahedron-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21.498 12.911l.206-.208a.984.984 0 0 0 0-1.407l-8.845-8.948a1.233 1.233 0 0 0-1.718 0l-8.845 8.949a.984.984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718-.001l.08-.081"></svg:path><svg:path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l2.634-.784m5.41-1.61l.801-.238c.195-.07.294-.156.296-.243M12 2.12v19.76M16 19h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerOctahedronPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
