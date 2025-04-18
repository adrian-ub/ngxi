import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSe4x3Icon],svg[flag-se-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#005293" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fecb00" d="M176 0v192H0v96h176v192h96V288h368v-96H272V0z"></svg:path>`,
})
export class FlagSe4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
