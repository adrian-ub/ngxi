import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRunBelowIcon],svg[codicon-run-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.8 1.01l-.78.41v12l.78.42l9-6v-.83zm.22 11.48V2.36l7.6 5.07zM12.85 15h-.71l-2.5-2.5l.71-.71L12 13.44V8h1v5.45l1.65-1.65l.71.71z"></svg:path>`,
})
export class CodiconRunBelowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
