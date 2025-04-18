import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMonumentIcon],svg[maki-monument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 0L6 2.5v7h3v-7zM3 11.5V15h9v-3.5L10.5 10h-6z"></svg:path>`,
})
export class MakiMonumentIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
