import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWorkflowyIcon],svg[arcticons-workflowy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10.693" cy="11.106" r="5.194" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.241 8.507h24.37c3.032 0 3.386 5.745.334 5.745H14.972"></svg:path><svg:circle cx="11.127" cy="36.894" r="5.194" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.675 34.294h24.37c3.031 0 3.385 5.745.333 5.745H15.405"></svg:path><svg:circle cx="20.355" cy="24.306" r="4.985" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.61 21.28h15.562c3.025 0 3.037 6.092 0 6.092h-15.56"></svg:path>`,
})
export class ArcticonsWorkflowyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
