import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSendMailSolidIcon],svg[iconoir-send-mail-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M7 4.25A2.75 2.75 0 0 0 4.25 7v1.25H5A2.25 2.25 0 0 1 6.677 12A2.25 2.25 0 0 1 5 15.75h-.75V17A2.75 2.75 0 0 0 7 19.75h13A2.75 2.75 0 0 0 22.75 17V7A2.75 2.75 0 0 0 20 4.25zm2.416 4.126a.75.75 0 0 0-.832 1.248l4.5 3a.75.75 0 0 0 .832 0l4.5-3a.75.75 0 0 0-.832-1.248L13.5 11.099z"></svg:path><svg:path d="M5.75 13.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75m0-3a.75.75 0 0 1-.75.75H1a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75"></svg:path></svg:g>`,
})
export class IconoirSendMailSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
