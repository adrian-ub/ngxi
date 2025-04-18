import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRunAllIcon],svg[codicon-run-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.78 2L2 2.41v12l.78.42l9-6V8zM3 13.48V3.35l7.6 5.07z"></svg:path><svg:path fill-rule="evenodd" d="m6 14.683l8.78-5.853V8L6 2.147V3.35l7.6 5.07L6 13.48z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconRunAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
