import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowLeftIcon],svg[codicon-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7 3.093l-5 5V8.8l5 5l.707-.707l-4.146-4.147H14v-1H3.56L7.708 3.8z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
