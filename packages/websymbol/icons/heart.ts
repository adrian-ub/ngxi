import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolHeartIcon],svg[websymbol-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M775 1q126 0 207 80t81 207v60q0 285-532 653Q0 634 0 348v-60Q0 161 80.5 81T287 1q81 0 134 30.5T531 130q58-68 111-98.5T775 1"></svg:path>`,
})
export class WebsymbolHeartIcon {
  readonly viewBox = input("0 0 1063 1000")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
