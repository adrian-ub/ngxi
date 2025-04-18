import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAlignHorizontalRightIcon],svg[carbon-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24v-4a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m2 0h15v-4l-15-.001zm6-12V8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2m2 0h7V8l-7-.001zm14 18h-2V2h2z"></svg:path>`,
})
export class CarbonAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
