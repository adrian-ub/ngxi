import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHexagramSolidIcon],svg[streamline-hexagram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.857.564a1 1 0 0 0-1.714 0L4.67 3.017H1.655a1 1 0 0 0-.857 1.515L2.279 7L.798 9.468a1 1 0 0 0 .857 1.515H4.67l1.473 2.452a1 1 0 0 0 1.714 0l1.473-2.452h3.015a1 1 0 0 0 .857-1.515L11.721 7l1.481-2.468a1 1 0 0 0-.857-1.515H9.33z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHexagramSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
