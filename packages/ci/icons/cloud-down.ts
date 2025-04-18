import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCloudDownIcon],svg[ci-cloud-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#ciCloudDown0)"><svg:path fill="currentColor" d="M19 20H6a6 6 0 0 1-.974-11.921A8.018 8.018 0 0 1 12 3.999a7.916 7.916 0 0 1 4.962 1.725a8.041 8.041 0 0 1 2.8 4.334A5 5 0 0 1 19 20ZM12 6a6.014 6.014 0 0 0-5.232 3.061L6.3 9.9l-.95.155A4 4 0 0 0 6 18h13a3 3 0 0 0 .46-5.965l-1.316-.2l-.322-1.292A5.988 5.988 0 0 0 12 6Zm0 10l-4-4h2.55V9h2.9v3H16l-4 4Z"></svg:path></svg:g><svg:defs><svg:clippath id="ciCloudDown0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class CiCloudDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
