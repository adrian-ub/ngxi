import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserWebsite1SolidIcon],svg[streamline-browser-website-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 12.25V3.314h10.908v8.934a.204.204 0 0 1-.205.205H1.751a.204.204 0 0 1-.205-.205Zm-1.5-10.5C.046.81.81.047 1.751.047h10.498c.942 0 1.705.763 1.705 1.705V12.25c0 .942-.763 1.705-1.705 1.705H1.751A1.704 1.704 0 0 1 .046 12.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserWebsite1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
