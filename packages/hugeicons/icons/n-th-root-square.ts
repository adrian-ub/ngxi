import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNThRootSquareIcon],svg[hugeicons-n-th-root-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 10.519V8.554m0 0C7.061 7.73 7.676 7 8.51 7c.984 0 1.429.931 1.496 1.554v1.965M7 8.554V7m-.01 7.514c.464-.255.87-.347 1.071-.174s.628.966.803 1.272c.268.468.576 1.405 1.111 1.405c.361 0 .652-.978 1.124-2.141c.72-1.772 1.525-4.014 1.647-4.216c.2-.335.401-.67.936-.67h3.347"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsNThRootSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
