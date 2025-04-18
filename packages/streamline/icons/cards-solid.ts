import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCardsSolidIcon],svg[streamline-cards-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.56.33a.48.48 0 0 0-.587.339L4.64 9.377a.48.48 0 0 0 .34.587l6.083 1.63a.48.48 0 0 0 .587-.34l2.335-8.707a.48.48 0 0 0-.34-.588L7.561.33ZM3.433 9.053l1.596-5.955L.356 4.349a.48.48 0 0 0-.34.588l2.335 8.707a.48.48 0 0 0 .587.34l6.084-1.63l.023-.007l-4.39-1.175a1.73 1.73 0 0 1-1.223-2.12Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCardsSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
