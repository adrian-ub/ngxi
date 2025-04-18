import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCameraIcon],svg[la-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 6l-.313.406L10 8H3v18h26V8h-7l-1.188-1.594L20.5 6zm1 2h7l1.188 1.594L21 10h6v14H5V10h6l.313-.406zM8 11c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m8 0c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4"></svg:path>`,
})
export class LaCameraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
