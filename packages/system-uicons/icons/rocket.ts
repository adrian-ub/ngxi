import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsRocketIcon],svg[system-uicons-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 1)"><svg:path d="M6.5 18.5c3-2.502 4-5.502 4-9s-1-6.498-4-9c-3 2.502-4 5.502-4 9s1 6.498 4 9"></svg:path><svg:path d="M10.062 13.362q.636.368 1.171.902q1.679 1.678 1.714 4.365c-2.509-.11-3.882-.765-4.926-1.647m-5.115-3.62a5.7 5.7 0 0 0-1.172.902Q.056 15.942.021 18.629c2.508-.11 3.882-.765 4.926-1.647"></svg:path><svg:circle cx="6.5" cy="6.5" r="2"></svg:circle></svg:g>`,
})
export class SystemUiconsRocketIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
