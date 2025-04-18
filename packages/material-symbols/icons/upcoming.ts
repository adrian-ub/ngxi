import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUpcomingIcon],svg[material-symbols-upcoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19v-5q0-.825.588-1.412T4 12h5q0 1.25.875 2.125T12 15t2.125-.875T15 12h5q.825 0 1.413.588T22 14v5q0 .825-.587 1.413T20 21zm13.6-10.2l-1.4-1.4l3.55-3.55l1.4 1.4zm-11.2 0L2.85 7.25l1.4-1.4L7.8 9.4zM11 8V3h2v5z"></svg:path>`,
})
export class MaterialSymbolsUpcomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
