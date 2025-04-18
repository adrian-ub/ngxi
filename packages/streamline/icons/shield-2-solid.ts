import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShield2SolidIcon],svg[streamline-shield-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.412.217A.5.5 0 0 0 6.6.202a5.86 5.86 0 0 1-5.53 2.303A.5.5 0 0 0 .5 3v2.781a8.5 8.5 0 0 0 5.397 7.894h.001l.59.23l.006.003a1.44 1.44 0 0 0 1.012 0l.006-.002l.59-.23l-.182-.466l.182.465A8.5 8.5 0 0 0 13.5 5.781V3a.5.5 0 0 0-.534-.499c-2.549.171-4.427-.644-5.554-2.284" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShield2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
