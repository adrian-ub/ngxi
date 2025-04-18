import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWarningOctagonIcon],svg[streamline-warning-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.793 13.207a1 1 0 0 1-.707.293H4.914a1 1 0 0 1-.707-.293L.793 9.793A1 1 0 0 1 .5 9.086V4.914a1 1 0 0 1 .293-.707L4.207.793A1 1 0 0 1 4.914.5h4.172a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707v4.172a1 1 0 0 1-.293.707zM7 4v3.25"></svg:path><svg:path d="M7 10a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineWarningOctagonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
