import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFile6Icon],svg[marketeq-file-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 18.75h12.5m0 16.667h-12.5zm-12.5-8.334h12.5z"></svg:path><svg:path stroke="#306CFE" d="M39.583 10.417v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25h22.917zM35.417 6.25v4.167h4.166z"></svg:path></svg:g>`,
})
export class MarketeqFile6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
