import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineModuleThreeIcon],svg[streamline-module-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25H1a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h4.25a.5.5 0 0 0 .5-.5V8.75a.5.5 0 0 0-.5-.5m7.75 0H8.75a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5V8.75a.5.5 0 0 0-.5-.5M9.13.5H4.88a.5.5 0 0 0-.5.5v4.25a.5.5 0 0 0 .5.5h4.25a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class StreamlineModuleThreeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
