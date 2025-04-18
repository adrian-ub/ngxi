import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsComposeIcon],svg[proicons-compose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.371 4.25H8.25a5 5 0 0 0-5 5v6.5a5 5 0 0 0 5 5h6.5a5 5 0 0 0 5-5v-2.121"></svg:path><svg:path d="M12.299 14.75a1.86 1.86 0 0 0 1.316-.545l6.59-6.59a1.86 1.86 0 0 0 0-2.633l-1.187-1.187a1.86 1.86 0 0 0-2.633 0l-6.59 6.59a1.86 1.86 0 0 0-.545 1.316v3.049z"></svg:path></svg:g>`,
})
export class ProiconsComposeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
