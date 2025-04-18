import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBar11Icon],svg[maki-bar-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.488 1C4.976 1 .5 1 1 1.5L5 6v2.5C5 9 2.5 9 2.5 10h6C8.5 9 6 9 6 8.5V6l4-4.5C10.5 1 6 1 5.488 1zM2.5 2h6l-1 1h-4l-1-1z" fill="currentColor"></svg:path>`,
})
export class MakiBar11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
