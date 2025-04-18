import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsApparelIcon],svg[zondicons-apparel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0"></svg:path>`,
})
export class ZondiconsApparelIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
