import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTreadmill01Icon],svg[hugeicons-treadmill-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.191 21H2.931c-.578 0-.895-.479-.928-.985c-.032-.493.204-1.012.73-1.14l15.215-3.769C22.205 14.068 23.364 21 20.191 21M19 18h.009M22 2c-.3.902-.483 2.149-1.167 2.833c-.334.334-.8.49-1.73.8L15 7m0 9l5-10.5M6 21l-1 1m13-1v1" color="currentColor"></svg:path>`,
})
export class HugeiconsTreadmill01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
