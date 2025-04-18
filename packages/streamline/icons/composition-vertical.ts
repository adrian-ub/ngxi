import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCompositionVerticalIcon],svg[streamline-composition-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.19 1.19a.52.52 0 0 0 0-.47a.49.49 0 0 0-.41-.22H3.25a.49.49 0 0 0-.492.449a.5.5 0 0 0 .031.241a14.67 14.67 0 0 1 0 11.62a.52.52 0 0 0 .05.47a.49.49 0 0 0 .41.22h7.48a.49.49 0 0 0 .41-.22a.52.52 0 0 0 0-.47a14.67 14.67 0 0 1 .05-11.62Z"></svg:path>`,
})
export class StreamlineCompositionVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
