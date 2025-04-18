import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiKaraoke11Icon],svg[maki-karaoke-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.5 4.4l-2 2l-1 1c-.5.4-.6 1.1-.3 1.7l.6.7c.6.4 1.3.2 1.7-.3l1-1l2-2l-2-2.1zM3.1 8.5l-.6-.7l2-2l.7.7l-2.1 2zM5 2l1-1h3l1 1v3L9 6H8L5 3V2z" fill="currentColor"></svg:path>`,
})
export class MakiKaraoke11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
