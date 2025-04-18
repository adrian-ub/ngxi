import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPenOff32FilledIcon],svg[fluent-pen-off-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.75 20.164l9.543 9.543a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.415 1.414l9.543 9.543l-7.479 7.479a3.7 3.7 0 0 0-1.001 1.84L2.022 28.79a1 1 0 0 0 1.187 1.188l6.22-1.333a3.7 3.7 0 0 0 1.842-1.002zm7.5-7.5l-5.025 5.024l-6.914-6.914l7.339-7.34a4.889 4.889 0 1 1 6.915 6.914l-.902.901l.276.276a3.5 3.5 0 0 1 0 4.95l-2.232 2.232a1 1 0 0 1-1.414-1.414l2.232-2.233a1.5 1.5 0 0 0 0-2.121z"></svg:path>`,
})
export class FluentPenOff32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
