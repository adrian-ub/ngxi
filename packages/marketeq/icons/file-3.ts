import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFile3Icon],svg[marketeq-file-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25h14.583l12.5 12.5v22.917A2.083 2.083 0 0 1 37.5 43.75"></svg:path><svg:path stroke="#344054" d="m39.583 18.75l-12.5-12.5L25 16.667z"></svg:path></svg:g>`,
})
export class MarketeqFile3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
