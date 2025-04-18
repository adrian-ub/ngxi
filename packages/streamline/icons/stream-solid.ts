import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStreamSolidIcon],svg[streamline-stream-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.248.512a3.312 3.312 0 0 1 .776 6.567L8.51 9.822a2.835 2.835 0 0 1-5.237 2.12l1.423.474a1.789 1.789 0 0 0 1.38-3.29l-1.745-.893a2.8 2.8 0 0 1 1.307-.405l.016-.001l1.537-3.349A3.312 3.312 0 0 1 10.248.512m.292 4.525a1.32 1.32 0 1 0-.152-2.635a1.32 1.32 0 0 0 .152 2.635M0 7.422l.01 2.275l5.176 1.721a.6.6 0 0 0 .463-1.104z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineStreamSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
