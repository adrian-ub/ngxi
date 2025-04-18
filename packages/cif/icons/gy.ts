import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifGyIcon],svg[cif-gy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#009E49" d="M.5.5h300v180H.5z"></svg:path><svg:path fill="#FFF" d="m.5.5l300 90l-300 90z"></svg:path><svg:path fill="#FCD116" d="M.5 8.33L274.1 90.5L.5 172.67z"></svg:path><svg:path fill="#000" d="m.5.5l150 90l-150 90z"></svg:path><svg:path fill="#CE1126" d="m.5 11l132.51 79.5L.5 170z"></svg:path></svg:g>`,
})
export class CifGyIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
