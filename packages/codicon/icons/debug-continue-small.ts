import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugContinueSmallIcon],svg[codicon-debug-continue-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2H3v12h1zm3.29.593L6.5 3v10l.79.407l7-5v-.814zM13.14 8L7.5 12.028V3.972z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDebugContinueSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
