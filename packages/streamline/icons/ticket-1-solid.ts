import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTicket1SolidIcon],svg[streamline-ticket-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.605 1.55h-7.05a1.5 1.5 0 0 0-1.5 1.5v2a.5.5 0 0 0 .374.483a1.517 1.517 0 0 1 0 2.933a.5.5 0 0 0-.373.484v1.999a1.5 1.5 0 0 0 1.5 1.5h7.05v-1.715a.625.625 0 1 1 1.25 0v1.715h2.588a1.5 1.5 0 0 0 1.5-1.5V8.946a.5.5 0 0 0-.369-.483a1.517 1.517 0 0 1 0-2.926a.5.5 0 0 0 .37-.483V3.051a1.5 1.5 0 0 0-1.5-1.5h-2.59v1.723a.625.625 0 0 1-1.25 0zm.625 3.816c.346 0 .625.28.625.625v2.016a.625.625 0 0 1-1.25 0V5.991c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTicket1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
