import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesComunicaOutlineIcon],svg[bubbles-comunica-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.125 16.624h11.25v3.75H9.125zm0-6.25h11.25v3.75H9.125zm-7.5-8.75h11.25v3.75H1.625zm5 3.75v1.25a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 1 1.25 1.25v1.25m2.5 3.75v2.5"></svg:path>`,
})
export class BubblesComunicaOutlineIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
