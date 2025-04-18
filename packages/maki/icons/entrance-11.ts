import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiEntrance11Icon],svg[maki-entrance-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zM9.27 4H7.88a.73.73 0 0 0-.52.21l-4 4a.73.73 0 0 1-.51.21H1.73a.73.73 0 1 0 0 1.46h1.89a.73.73 0 0 0 .51-.21l4-4a.73.73 0 0 1 .48-.17h.66a.73.73 0 0 0 .73-.73a.73.73 0 0 0-.73-.77zm-4.52-.5a.75.75 0 0 0-.75.75V6l1.5-1.5v-.25a.75.75 0 0 0-.75-.75z" fill="currentColor"></svg:path>`,
})
export class MakiEntrance11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
