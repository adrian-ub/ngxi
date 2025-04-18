import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft05Icon],svg[hugeicons-rotate-left-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.284 11.062L3.574 8.48a1.353 1.353 0 0 1-.324-1.894a1.37 1.37 0 0 1 1.901-.345l7.419 5.164l.581.394l-.03-2.54c0-.91.792-1.617 1.698-1.517a1.53 1.53 0 0 1 1.346 1.302l.642 4.486c.146 1.018.219 1.527.182 2.016a4.5 4.5 0 0 1-.7 2.096c-.264.412-.629.776-1.357 1.503l-1.536 1.533a4.53 4.53 0 0 1-5.695.57l-3.294-2.18l-.37-.258a1.353 1.353 0 0 1-.325-1.893a1.37 1.37 0 0 1 1.901-.345l.371.258m1.3-5.768l1.112.774m-1.112-.774a1.37 1.37 0 0 0-1.902.345a1.353 1.353 0 0 0 .325 1.893l.741.517m0 0l.371.258m-.37-.258a1.37 1.37 0 0 0-1.902.345a1.353 1.353 0 0 0 .324 1.893l.371.259M9.363 4.966c.397.395 2.124.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.963m.328 2.963c1.021-1.769 5.081-4.59 9.11-1.769c1.946 1.363 2.22 2.222 2.529 2.798" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
