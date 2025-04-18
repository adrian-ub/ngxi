import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLiftDisabilitySolidIcon],svg[streamline-lift-disability-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.854.146a.5.5 0 0 0-.707 0l-2 2A.5.5 0 0 0 9.5 3h4a.5.5 0 0 0 .354-.854zM9.5 5a.5.5 0 0 0-.354.854l2 2a.5.5 0 0 0 .708 0l2-2A.5.5 0 0 0 13.5 5zm-5.143-.74a1.741 1.741 0 1 1 3.483 0a1.741 1.741 0 0 1-3.483 0M7.1 7.485a1 1 0 1 0-2 0v2.482a1 1 0 0 0 1 1h1.895v1.978a1 1 0 1 0 2 0v-2.013A1.965 1.965 0 0 0 8.03 8.968H7.1zM4.438 7.36a.75.75 0 0 1-.75.75a2.145 2.145 0 1 0 1.358 3.808a.75.75 0 1 1 .949 1.162a3.645 3.645 0 1 1-2.307-6.47a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLiftDisabilitySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
