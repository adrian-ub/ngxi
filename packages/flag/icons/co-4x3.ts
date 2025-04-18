import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCo4x3Icon],svg[flag-co-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#ffe800" d="M0 0h640v480H0z"></svg:path><svg:path fill="#00148e" d="M0 240h640v240H0z"></svg:path><svg:path fill="#da0010" d="M0 360h640v120H0z"></svg:path></svg:g>`,
})
export class FlagCo4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
