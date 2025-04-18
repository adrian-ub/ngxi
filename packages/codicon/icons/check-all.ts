import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCheckAllIcon],svg[codicon-check-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.62 3.596L7.815 12.81l-.728-.033L4 8.382l.754-.53l2.744 3.907L14.917 3z"></svg:path><svg:path d="m7.234 8.774l4.386-5.178L10.917 3l-4.23 4.994zm-1.55.403l.548.78l-.547-.78zm-1.617 1.91l.547.78l-.799.943l-.728-.033L0 8.382l.754-.53l2.744 3.907l.57-.672z"></svg:path></svg:g>`,
})
export class CodiconCheckAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
