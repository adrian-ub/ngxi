import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconAttachIcon],svg[codicon-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.252 15h-.5a3.386 3.386 0 0 1-3.25-3.5V3.682A2.6 2.6 0 0 1 7.002 1a2.6 2.6 0 0 1 2.5 2.682v7.167a1.55 1.55 0 0 1-1.5 1.591a1.55 1.55 0 0 1-1.5-1.568V7h1v3.849a.55.55 0 0 0 .5.591a.55.55 0 0 0 .5-.591V3.682A1.6 1.6 0 0 0 7.002 2a1.6 1.6 0 0 0-1.5 1.682V11.5a2.39 2.39 0 0 0 2.25 2.5h.5a2.39 2.39 0 0 0 2.25-2.5V5h1v6.5a3.386 3.386 0 0 1-3.25 3.5"></svg:path>`,
})
export class CodiconAttachIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
