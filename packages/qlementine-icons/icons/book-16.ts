import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsBook16Icon],svg[qlementine-icons-book-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M6.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5A1.5 1.5 0 0 1 3.5 0h9A1.5 1.5 0 0 1 14 1.5v10c0 .546-.292 1.02-.728 1.29l-.141.423a2.5 2.5 0 0 0 0 1.58l.07.209h.3a.5.5 0 0 1 0 1H4c-1.1 0-2-.895-2-2v-12.5zM12.5 1h-9a.5.5 0 0 0-.5.5v10.8c.294-.17.636-.268 1-.268h8.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5zm-.352 12h-8.15a1 1 0 0 0 0 2h8.15a3.5 3.5 0 0 1 0-2" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsBook16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
