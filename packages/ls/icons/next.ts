import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsNextIcon],svg[ls-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 628V65l489 282z"></svg:path>`,
})
export class LsNextIcon {
  readonly viewBox = input("0 0 489 628")
  readonly width = input("0.78em")
  readonly height = input("1em")
}
