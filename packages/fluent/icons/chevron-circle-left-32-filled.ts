import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleLeft32FilledIcon],svg[fluent-chevron-circle-left-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-12.707 6.707a1 1 0 0 0 1.414-1.414L13.414 16l5.293-5.293a1 1 0 0 0-1.414-1.414l-5.879 5.878l-.028.033l-.073.08a1 1 0 0 0-.293.716c-.003.26.097.484.293.718c.041.05.05.06.1.11h.002z"></svg:path>`,
})
export class FluentChevronCircleLeft32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
