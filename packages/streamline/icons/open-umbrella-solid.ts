import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOpenUmbrellaSolidIcon],svg[streamline-open-umbrella-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75v.801A5.5 5.5 0 0 1 12.5 7a.5.5 0 0 1-.5.5H7.75v4.25a.75.75 0 0 0 1.5 0a.75.75 0 0 1 1.5 0a2.25 2.25 0 0 1-4.5 0V7.5H2a.5.5 0 0 1-.5-.5a5.5 5.5 0 0 1 4.75-5.449V.75A.75.75 0 0 1 7 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOpenUmbrellaSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
