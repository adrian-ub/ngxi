import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOctahedronIcon],svg[tabler-octahedron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12.859 21.652l8.845-8.949a.984.984 0 0 0 0-1.407l-8.845-8.948a1.233 1.233 0 0 0-1.718 0l-8.845 8.949a.984.984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718-.001"></svg:path><svg:path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l8.845-2.632c.195-.07.294-.156.296-.243M12 2.12v19.76"></svg:path></svg:g>`,
})
export class TablerOctahedronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
