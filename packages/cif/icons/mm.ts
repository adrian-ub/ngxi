import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMmIcon],svg[cif-mm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FECB00" d="M.5.5h300v100H.5z"></svg:path><svg:path fill="#EA2839" d="M.5 100.5h300v100H.5z"></svg:path><svg:path fill="#34B233" d="M.5 67.166h300v66.667H.5z"></svg:path><svg:path fill="#FFF" d="m80.407 84.759l43.32 31.473l-16.547 50.926l43.32-31.474l43.32 31.474l-16.547-50.926l43.32-31.473h-53.546L150.5 33.833l-16.546 50.926z"></svg:path></svg:g>`,
})
export class CifMmIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
