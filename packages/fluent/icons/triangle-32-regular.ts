import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangle32RegularIcon],svg[fluent-triangle-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.154 4.683c1.236-2.242 4.458-2.241 5.693 0l10.742 19.5C30.783 26.347 29.216 29 26.743 29H5.25c-2.474 0-4.04-2.653-2.846-4.819zm3.941.966a1.25 1.25 0 0 0-2.19 0L4.157 25.146A1.25 1.25 0 0 0 5.251 27h21.492a1.25 1.25 0 0 0 1.095-1.853z"></svg:path>`,
})
export class FluentTriangle32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
