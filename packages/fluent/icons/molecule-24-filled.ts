import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMolecule24FilledIcon],svg[fluent-molecule-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12a5 5 0 1 0-4.337-2.51l-2.714 1.808a4 4 0 1 0 .23 5.13l3.887 1.943a3 3 0 1 0 .672-1.341L9.85 15.087a4 4 0 0 0-.113-2.513l2.863-1.907A4.98 4.98 0 0 0 16 12"></svg:path>`,
})
export class FluentMolecule24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
