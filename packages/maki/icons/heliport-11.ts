import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiHeliport11Icon],svg[maki-heliport-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 1c-.277 0-.5.223-.5.5s.224.482.5.5h3v2H2.912a1.5 1.5 0 1 0-.39 1.596L4.5 8.5c.681 1 1.5 1 2 1h3.535s.965 0 .965-1v-1c0-.5-.5-1-.5-1l-2-2S8 4 7.5 4H7V2h3a.499.499 0 1 0 0-1H3zM1.5 4a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1zm6.25 1s.25 0 .75.5L10 7H7.5S7 7 7 6.5v-1s0-.5.5-.5h.25z" fill="currentColor"></svg:path>`,
})
export class MakiHeliport11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
