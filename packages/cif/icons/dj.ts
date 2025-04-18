import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifDjIcon],svg[cif-dj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6AB2E7" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#12AD2B" d="M.5 100.5h300v100H.5z"></svg:path><svg:path fill="#FFF" d="M.5.5v200l86.603-50l86.603-50l-86.603-50z"></svg:path><svg:path fill="#D7141A" d="m66.787 75.5l6.205 19.098h20.081l-16.246 11.803l6.205 19.099l-16.246-11.804L50.541 125.5l6.206-19.099L40.5 94.598h20.081z"></svg:path></svg:g>`,
})
export class CifDjIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
