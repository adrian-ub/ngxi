import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCircleStroked11Icon],svg[maki-circle-stroked-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5 0a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 1.222a4.278 4.278 0 1 0 0 8.556a4.278 4.278 0 0 0 0-8.556z" fill="currentColor"></svg:path>`,
})
export class MakiCircleStroked11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
