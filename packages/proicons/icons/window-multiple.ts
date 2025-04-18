import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsWindowMultipleIcon],svg[proicons-window-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 6.25a3.5 3.5 0 0 1 3.5-3.5h8.5a3.5 3.5 0 0 1 3.5 3.5v8.5a3.5 3.5 0 0 1-3.5 3.5h-8.5a3.5 3.5 0 0 1-3.5-3.5z"></svg:path><svg:path d="M21.25 6.75v8a6.5 6.5 0 0 1-6.5 6.5h-8m-4-14.273h15.5"></svg:path></svg:g>`,
})
export class ProiconsWindowMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
