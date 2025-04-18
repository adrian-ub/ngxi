import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTrafficConeSolidIcon],svg[streamline-traffic-cone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.715 3.714l.658-2.443a1 1 0 0 1 .965-.74h1.323a1 1 0 0 1 .966.74l.658 2.443zm-.336 1.25l-.945 3.51h7.132l-.945-3.51H4.38Zm-1.937 7.192l.655-2.432h7.806l.655 2.432h1.63a.75.75 0 0 1 0 1.5H.812a.75.75 0 1 1 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTrafficConeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
