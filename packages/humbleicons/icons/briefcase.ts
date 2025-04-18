import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBriefcaseIcon],svg[humbleicons-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 14l3.15.787a20 20 0 0 0 9.7 0L20 14"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class HumbleiconsBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
