import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeglass2Icon],svg[tabler-eyeglass-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4"></svg:path><svg:path d="M14 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-11 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0"></svg:path></svg:g>`,
})
export class TablerEyeglass2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
