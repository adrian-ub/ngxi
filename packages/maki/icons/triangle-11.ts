import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTriangle11Icon],svg[maki-triangle-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.517 1.232a.556.556 0 0 0-.493.268l-4 6.66c-.223.37.044.84.476.84h8c.432 0 .699-.47.476-.84l-4-6.66a.556.556 0 0 0-.459-.268z" fill="currentColor"></svg:path>`,
})
export class MakiTriangle11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
