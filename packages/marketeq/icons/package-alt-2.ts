import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPackageAlt2Icon],svg[marketeq-package-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 16.667h37.5v25a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083z"></svg:path><svg:path stroke="#344054" d="M25 6.25v20.833"></svg:path><svg:path stroke="#306CFE" d="m43.75 16.667l-9.812-9.813a2.08 2.08 0 0 0-1.459-.604H17.521c-.547.002-1.07.22-1.459.604L6.25 16.667"></svg:path></svg:g>`,
})
export class MarketeqPackageAlt2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
