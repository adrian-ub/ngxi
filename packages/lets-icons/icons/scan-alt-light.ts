import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsScanAltLightIcon],svg[lets-icons-scan-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M20 10V9c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C17.396 5 16.93 5 16 5m4 9v1c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C17.396 19 16.93 19 16 19m-6 0H9c-1.87 0-2.804 0-3.5-.402A3 3 0 0 1 4.402 17.5C4 16.804 4 15.87 4 14m6-9H9c-1.87 0-2.804 0-3.5.402A3 3 0 0 0 4.402 6.5C4 7.196 4 8.13 4 10"></svg:path><svg:path stroke-linecap="round" d="M10 21V3"></svg:path></svg:g>`,
})
export class LetsIconsScanAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
