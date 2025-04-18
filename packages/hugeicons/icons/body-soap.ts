import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBodySoapIcon],svg[hugeicons-body-soap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.5 13a5 5 0 0 1 10 0v5c0 1.886 0 2.828-.586 3.414S12.386 22 10.5 22h-2c-1.886 0-2.828 0-3.414-.586S4.5 19.886 4.5 18z"></svg:path><svg:path d="M14.5 13.112c-3.64-3.273-5.61 1.829-10 .73M7.5 8V7c0-.943 0-1.414.293-1.707S8.557 5 9.5 5s1.414 0 1.707.293s.293.764.293 1.707v1m-2-3V2m0 0h-2m2 0h3.423c.989 0 1.826.39 2.577 1m3.941 5.973c.23.873-.235 1.758-1.038 1.977c-.804.22-1.64-.31-1.87-1.183c-.23-.872.83-2.767.83-2.767s1.849 1.1 2.078 1.973"></svg:path></svg:g>`,
})
export class HugeiconsBodySoapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
