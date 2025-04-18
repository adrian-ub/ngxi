import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBdIcon],svg[cif-bd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#006A4E" d="M.5.5h300v180H.5z"></svg:path><svg:circle cx="135.5" cy="90.5" r="60" fill="#F42A41"></svg:circle></svg:g>`,
})
export class CifBdIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
