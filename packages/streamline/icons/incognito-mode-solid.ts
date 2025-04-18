import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIncognitoModeSolidIcon],svg[streamline-incognito-mode-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.544 1.218A1.46 1.46 0 0 1 3.982 0h6.036c.712 0 1.32.515 1.438 1.218l.712 4.276h1.054a.75.75 0 0 1 0 1.5H.778a.75.75 0 0 1 0-1.5h1.054zm6.206 9.681a1.5 1.5 0 1 1 3.001 0a1.5 1.5 0 0 1-3.001 0m1.5-3a3 3 0 0 0-2.53 1.387A1.9 1.9 0 0 0 7 9.149q-.397 0-.72.136a3 3 0 1 0 .47 1.615v-.002a.5.5 0 0 1 .044-.163a.13.13 0 0 1 .042-.056c.006-.003.045-.03.163-.03c.117 0 .157.027.162.03c.009.006.024.02.042.056a.5.5 0 0 1 .046.175v.002l.001.03a3 3 0 1 0 3-3.043m-6.501 1.5a1.5 1.5 0 0 1 1.5 1.463v.072a1.5 1.5 0 1 1-1.5-1.535" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIncognitoModeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
