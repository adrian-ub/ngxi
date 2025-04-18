import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsRuUdIcon],svg[circle-flags-ru-ud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRuUd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRuUd0)"><svg:path fill="#eee" d="M160 0h192l32 256l-32 256H160l-32-256Z"></svg:path><svg:path fill="#333" d="M0 0h160v512H0Z"></svg:path><svg:path fill="#d80027" d="M352 0h160v512H352ZM229 176l107 107H176l107-107v160L176 229h160L229 336Z"></svg:path></svg:g>`,
})
export class CircleFlagsRuUdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
