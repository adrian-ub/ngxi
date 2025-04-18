import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineModuleThreeSolidIcon],svg[streamline-module-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.88 0a1 1 0 0 0-1 1v4.25a1 1 0 0 0 1 1h4.25a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM1 7.75a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1h4.25a1 1 0 0 0 1-1V8.75a1 1 0 0 0-1-1zm6.75 1a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H8.75a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineModuleThreeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
