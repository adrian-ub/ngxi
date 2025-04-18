import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStatusIcon],svg[lets-icons-status-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.98 9.253a7.52 7.52 0 0 0-4.233-4.234a3 3 0 0 0-.534.868a6.52 6.52 0 0 1 3.9 3.9a3 3 0 0 0 .868-.534m-6.752-3.75L12 5.5a6.5 6.5 0 1 0 6.496 6.272q.516-.162.976-.425q.027.323.028.653a7.5 7.5 0 1 1-6.847-7.472a5 5 0 0 0-.425.976" clip-rule="evenodd"></svg:path><svg:circle cx="17" cy="7" r="3" fill="currentColor"></svg:circle>`,
})
export class LetsIconsStatusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
