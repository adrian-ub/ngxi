import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentInkingTool20FilledIcon],svg[fluent-inking-tool-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.52 15q-.02.248-.02.5c0 .582.072 1.162.273 1.616c.208.47.6.884 1.227.884s1.019-.414 1.227-.884c.2-.454.273-1.034.273-1.616q0-.252-.02-.5zM2.5 5.5v-3A.5.5 0 0 1 3 2h14a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 1 16 7H4a1.5 1.5 0 0 1-1.5-1.5M4.75 8l2.724 5.447a1 1 0 0 0 .894.553h3.264a1 1 0 0 0 .894-.553L15.25 8z"></svg:path>`,
})
export class FluentInkingTool20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
