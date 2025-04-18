import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMolecule20FilledIcon],svg[fluent-molecule-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6a4 4 0 0 1-7.326 2.222l-1.668.834C8.62 9.687 9 10.55 9 11.5q-.002.56-.166 1.067l2.7 1.388a2.5 2.5 0 1 1-.449.894l-2.689-1.383a3.5 3.5 0 1 1-1.291-5.077l2.12-1.06A4 4 0 1 1 17 6"></svg:path>`,
})
export class FluentMolecule20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
