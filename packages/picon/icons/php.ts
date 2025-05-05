import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPhpIcon],svg[picon-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V1h1v2h1v2L4 4m3-1v2H6V1h2v2M1 3v2H0V1h2v2"></svg:path>`,
})
export class PiconPhpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
