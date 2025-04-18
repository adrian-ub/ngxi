import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCameraRetroIcon],svg[la-camera-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 6l-.313.406L10 8H9V7H5v1H3v18h26V8h-7l-1.188-1.594L20.5 6zm1 2h7l1.188 1.594L21 10h6v4h-5.813c-1.042-1.785-2.98-3-5.187-3s-4.145 1.215-5.188 3H5v-4h6l.313-.406zM23 11v2h2v-2zm-7 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4M5 16h5.094c-.055.32-.094.664-.094 1c0 3.3 2.7 6 6 6s6-2.7 6-6c0-.336-.04-.68-.094-1H27v8H5z"></svg:path>`,
})
export class LaCameraRetroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
