import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPianoliIcon],svg[arcticons-pianoli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.004 19.353l.823-.145l2.87 16.275l-.784.138m1.391-17.026l3.64-.642l2.87 16.275l-3.64.642zm4.689 15.954l1.443 8.179m2.805-25.708l4.99 28.301m.306-29.236l3.64-.641l2.87 16.275l-3.64.641zm7.117-1.255l3.64-.641l2.87 16.275l-3.64.641zm7.117-1.255l3.64-.641l2.87 16.275l-3.64.641zm-2.427 17.209l2.022 11.467m5.095-12.721l1.189 6.746m-15.423-4.237l2.29 12.984m13.62-32.57l-38.31 6.755"></svg:path>`,
})
export class ArcticonsPianoliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
