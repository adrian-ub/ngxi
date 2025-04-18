import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCheveronRightIcon],svg[zondicons-cheveron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.95 10.707l.707-.707L8 4.343L6.586 5.757L10.828 10l-4.242 4.243L8 15.657z"></svg:path>`,
})
export class ZondiconsCheveronRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
