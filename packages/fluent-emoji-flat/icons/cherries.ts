import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCherriesIcon],svg[fluent-emoji-flat-cherries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9AD02B" d="M19.702 3.259C9.847 5.12 7.508 13.87 7.594 17.164l1.867-.059c.172-3.19 1.368-5.759 2.97-7.66l.006-.007c.493-.585.834-.99 1.333-.223l5.918 9.094l1.671-.894l-6.05-9.318c-.493-.765-.325-.964.277-1.36a11.7 11.7 0 0 1 2.419-1.134c.694-.224.862.128.935.302c1.76 4.226 3.826 5.872 5.004 6.356c1.83.692 3.193.927 5.623.1c.234-.08.316-.345.129-.647c0 0-1.64-2.567-3.236-5.421c0 0-1.822-3.807-6.758-3.034"></svg:path><svg:path fill="#F8312F" fill-rule="evenodd" d="M15 23.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m15.03 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCherriesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
