import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFilesIcon],svg[marketeq-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M16.77 35.417h-.207m16.875 0h-.209"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M33.333 12.5v8.333M16.667 12.5v8.333z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M22.917 45.833h-12.5a2.083 2.083 0 0 1-2.084-2.083V6.25a2.083 2.083 0 0 1 2.084-2.083h12.5A2.083 2.083 0 0 1 25 6.25v37.5a2.083 2.083 0 0 1-2.083 2.083m18.75-2.083V6.25a2.083 2.083 0 0 0-2.084-2.083h-12.5A2.083 2.083 0 0 0 25 6.25v37.5a2.083 2.083 0 0 0 2.083 2.083h12.5a2.083 2.083 0 0 0 2.084-2.083"></svg:path></svg:g>`,
})
export class MarketeqFilesIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
