import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsCarIcon],svg[grommet-icons-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 10.997c0-.55.44-.997 1.002-.997h19.996c.553 0 1.002.453 1.002.997v6.006c0 .55-.44.997-1.002.997H2.002A1.004 1.004 0 0 1 1 17.003zM6 2h12l4 8H2zm6 8.5L15 5M3 18h3v2.99c0 .558-.443 1.01-.999 1.01H3.999A1 1 0 0 1 3 20.99zm15 0h3v2.99c0 .558-.443 1.01-.999 1.01h-1.002A1 1 0 0 1 18 20.99zM5 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-7-2v2m2-2v2m-4-2v2"></svg:path>`,
})
export class GrommetIconsCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
