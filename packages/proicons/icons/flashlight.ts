import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFlashlightIcon],svg[proicons-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.512 7.71h10.976m-8.73 3.78h6.477v8.11a1.9 1.9 0 0 1-1.9 1.9h-2.677a1.9 1.9 0 0 1-1.9-1.9z"></svg:path><svg:path d="m5.806 7.99l2.952 3.5h6.477l2.959-3.5a1 1 0 0 0 .236-.645V4.85A1.85 1.85 0 0 0 16.58 3H7.42a1.85 1.85 0 0 0-1.85 1.85v2.495a1 1 0 0 0 .236.645m6.191 7.039v1.766"></svg:path></svg:g>`,
})
export class ProiconsFlashlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
