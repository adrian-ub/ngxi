import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHandGrabSolidIcon],svg[streamline-hand-grab-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.794 2.51A2.5 2.5 0 0 1 6.809.07l.013.003l4.557 1.09a2.5 2.5 0 0 1 1.977 2.445v3.016a10.5 10.5 0 0 1-1.108 4.696l-.392.783v1.382a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1.26L2.113 10.83a2.5 2.5 0 0 1-.89-1.461l-.53-2.655a2.5 2.5 0 0 1 1.522-2.811l.023-.01l.023-.006l.283-.083V6.08a.625.625 0 0 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHandGrabSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
