import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHammerIcon],svg[mdi-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19.63L13.43 8.2l-.71-.7l1.42-1.43L12 3.89c1.2-1.19 3.09-1.19 4.27 0l3.6 3.61l-1.42 1.41h2.84l.71.71l-3.55 3.59l-.71-.71V9.62l-1.47 1.42l-.71-.71L4.13 21.76z"></svg:path>`,
})
export class MdiHammerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
