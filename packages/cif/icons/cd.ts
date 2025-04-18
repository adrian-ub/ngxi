import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCdIcon],svg[cif-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#007FFF" d="M.5 0h300v225H.5z"></svg:path><svg:path fill="#F7D618" d="M14 45h31.5l9.75-31.5L65 45h31.5L71 64.5L80.75 96l-25.5-19.5L29.75 96l9.75-31.5zM281.75 0L.5 168.75V225h18.75L300.5 56.25V0z"></svg:path><svg:path fill="#CE1021" d="M300.5 0L.5 180v45l300-180z"></svg:path></svg:g>`,
})
export class CifCdIcon {
  readonly viewBox = input("0 0 301 225")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
