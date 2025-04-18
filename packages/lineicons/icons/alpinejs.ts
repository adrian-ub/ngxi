import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlpinejsIcon],svg[lineicons-alpinejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.556 7.413L22 11.838l-4.445 4.425l-4.444-4.425zm-11.112 0l9.214 9.174H6.77L2 11.838z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsAlpinejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
