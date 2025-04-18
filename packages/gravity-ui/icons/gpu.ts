import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiGpuIcon],svg[gravity-ui-gpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiGpu0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.25A.75.75 0 0 1 .75.5h.5A2.25 2.25 0 0 1 3.5 2.75V3H13a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H3.5v1.25a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 0 1.25 2h-.5A.75.75 0 0 1 0 1.25M13 4.5H3.5v7H13a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 13 4.5M8.5 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0M10 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiGpu0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiGpuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
