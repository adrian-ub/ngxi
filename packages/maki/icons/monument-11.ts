import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMonument11Icon],svg[maki-monument-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5 0L4 2v4.5h3V2L5.5 0zM3 7L2 8v3h7V8L8 7H3z" fill="currentColor"></svg:path>`,
})
export class MakiMonument11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
