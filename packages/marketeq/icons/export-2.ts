import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqExport2Icon],svg[marketeq-export-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 6.25h12.5v12.5m-20.833 8.333L43.75 6.25"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083v14.584a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h14.584"></svg:path></svg:g>`,
})
export class MarketeqExport2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
