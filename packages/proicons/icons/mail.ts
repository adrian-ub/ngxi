import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMailIcon],svg[proicons-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="18.5" height="15.5" x="2.75" y="4.25" rx="3"></svg:rect><svg:path d="m2.75 8l8.415 3.866a2 2 0 0 0 1.67 0L21.25 8"></svg:path></svg:g>`,
})
export class ProiconsMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
