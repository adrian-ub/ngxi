import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHearingDeaf2Icon],svg[streamline-hearing-deaf-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M11.805 1.077c.449.387.757.907.93 1.512"></svg:path><svg:path stroke-linejoin="round" d="m3.262 8.618l.46.46m-2.615.606l1.494 1.493M4.31 6.468L5.804 7.96m-1.696 4.37c.282.281.658.574 1.438.5c1.262-.12 1.75-.931 2-1.781s1.125-2.032 1.5-2.344c.75-.938 1.937-1.719 1.781-3.875s-2.062-3.531-4.75-3.156C4.258 1.927 3.445 3.63 3.174 4.83"></svg:path><svg:path stroke-linejoin="round" d="M5.804 4.561c.343-.547.69-.737 1.03-.828c1.424-.379 2.513 1.408 1.282 2.734"></svg:path></svg:g>`,
})
export class StreamlineHearingDeaf2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
