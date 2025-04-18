import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLodging11Icon],svg[maki-lodging-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M1.5 2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V8h7v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5H2V2.5a.5.5 0 0 0-.5-.5zm2 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6 3a1 1 0 0 0-1 1v1H3a.5.5 0 0 0 0 1h7V5a2 2 0 0 0-2-2H6z" fill="currentColor"></svg:path>`,
})
export class MakiLodging11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
