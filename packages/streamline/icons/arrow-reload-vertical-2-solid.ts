import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowReloadVertical2SolidIcon],svg[streamline-arrow-reload-vertical-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.457 4H9.75V3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V3a3 3 0 0 1 3-3h3.5a3 3 0 0 1 3 3v1h1.293a.5.5 0 0 1 .353.854l-2.293 2.292a.5.5 0 0 1-.707 0L8.104 4.854A.5.5 0 0 1 8.457 4M2.25 10H.957a.5.5 0 0 1-.353-.854l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1-.353.854H4.25v1a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a3 3 0 0 1-3 3h-3.5a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowReloadVertical2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
