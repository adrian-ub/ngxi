import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiToggleButtonStateBIcon],svg[openmoji-toggle-button-state-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#d0cfce" d="M20.945 45.98h30.04c5.513 0 9.98-4.469 9.98-9.98s-4.468-9.98-9.98-9.98h-30.04c-5.511 0-9.98 4.468-9.98 9.98c0 5.511 4.469 9.98 9.98 9.98"></svg:path><svg:circle cx="50.965" cy="36" r="10.001" fill="#b1cc33"></svg:circle><svg:path fill="#5c9e31" d="M43.962 43.072c3.905 3.905 10.238 3.905 14.143 0s3.906-10.238 0-14.144"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M20.945 45.98h30.04c5.513 0 9.98-4.469 9.98-9.98v0c0-5.512-4.468-9.98-9.98-9.98h-30.04c-5.511 0-9.98 4.468-9.98 9.98v0c0 5.511 4.469 9.98 9.98 9.98"></svg:path><svg:circle cx="50.965" cy="36" r="10.001"></svg:circle><svg:path d="M43.962 43.072c3.905 3.905 10.238 3.905 14.143 0s3.906-10.238 0-14.144"></svg:path></svg:g>`,
})
export class OpenmojiToggleButtonStateBIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
