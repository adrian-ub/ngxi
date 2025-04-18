import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCar6Icon],svg[lineicons-car-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12.125a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm7.75.75a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M7.699 3.25a2.25 2.25 0 0 0-2.107 1.46L3.706 9.746A3.74 3.74 0 0 0 2.5 12.5v.75a3.75 3.75 0 0 0 2.25 3.438V18a1.5 1.5 0 0 0 3 0v-1h8.5v1a1.5 1.5 0 0 0 3 0v-1.312a3.75 3.75 0 0 0 2.25-3.438v-.75a3.74 3.74 0 0 0-1.207-2.756L18.408 4.71A2.25 2.25 0 0 0 16.3 3.25zM17.75 15.5H6.25A2.25 2.25 0 0 1 4 13.25v-.75a2.25 2.25 0 0 1 2.25-2.25h11.5A2.25 2.25 0 0 1 20 12.5v.75a2.25 2.25 0 0 1-2.25 2.25m.586-6.705a4 4 0 0 0-.586-.045H6.25q-.3 0-.587.046l1.333-3.56A.75.75 0 0 1 7.7 4.75h8.6a.75.75 0 0 1 .702.487z"></svg:path>`,
})
export class LineiconsCar6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
