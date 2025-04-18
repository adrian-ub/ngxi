import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowTopFilledIcon],svg[tabler-inner-shadow-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142m12.02 2.121a7 7 0 0 0-9.899 0a1 1 0 0 0 1.414 1.414a5 5 0 0 1 7.072 0A1 1 0 0 0 16.95 7.05z"></svg:path>`,
})
export class TablerInnerShadowTopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
