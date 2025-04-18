import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSendMailIcon],svg[iconoir-send-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9 9l4.5 3L18 9M3 13.5h2m-4-3h4"></svg:path><svg:path d="M5 7.5V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5"></svg:path></svg:g>`,
})
export class IconoirSendMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
