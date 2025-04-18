import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeylimbaIcon],svg[arcticons-keylimba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="16.423" cy="20.153" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.423" ry="2.692"></svg:ellipse><svg:ellipse cx="31.577" cy="20.153" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.423" ry="2.692"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.671 27.46c-1.328 1.84-3.335 3.08-6.671 3.08s-5.343-1.238-6.671-3.08"></svg:path>`,
})
export class ArcticonsKeylimbaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
