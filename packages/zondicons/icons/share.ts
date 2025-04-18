import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsShareIcon],svg[zondicons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2zm2 0v8h8v-8h-2V8H8v2zm3-6.17V16h2V3.83l3.07 3.07l1.42-1.41L10 0l-.7.7l-4.8 4.8l1.42 1.4L9 3.84z"></svg:path>`,
})
export class ZondiconsShareIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
