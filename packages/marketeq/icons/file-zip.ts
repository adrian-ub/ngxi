import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFileZipIcon],svg[marketeq-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 22.917h4.167M20.833 6.25v20.833zm-2.083 8.333h4.167z"></svg:path><svg:path stroke="#306CFE" d="M39.583 10.417v31.25A2.083 2.083 0 0 1 37.5 43.75h-25a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 12.5 6.25h22.917zM35.417 6.25v4.167h4.166z"></svg:path></svg:g>`,
})
export class MarketeqFileZipIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
