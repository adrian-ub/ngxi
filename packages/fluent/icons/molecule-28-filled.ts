import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMolecule28FilledIcon],svg[fluent-molecule-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14a6 6 0 1 0-5.364-3.31l-3.359 2.363a4.5 4.5 0 1 0-.3 5.302l5.203 3.035a3.5 3.5 0 1 0 .77-1.287l-5.226-3.049a4.5 4.5 0 0 0 .156-2.591l3.592-2.526A6 6 0 0 0 19 14"></svg:path>`,
})
export class FluentMolecule28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
