import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpQuestion1SolidIcon],svg[streamline-help-question-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M5.75 5.25A1.25 1.25 0 1 1 7 6.5a.75.75 0 0 0-.75.75v.646a.75.75 0 1 0 1.5 0a2.751 2.751 0 1 0-3.5-2.646a.75.75 0 0 0 1.5 0M8 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHelpQuestion1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
