import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMegaphoneIcon],svg[picon-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3l6-3v7L5 5Q2 7 2 4L0 6V1m3 3v1h1V4"></svg:path>`,
})
export class PiconMegaphoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
