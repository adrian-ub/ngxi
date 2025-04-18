import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconUnlockIcon],svg[codicon-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 7V5a3 3 0 0 1 5.83-1h1.044A4.002 4.002 0 0 0 4 5v2H3L2 8v6l1 1h10l1-1V8l-1-1zm6 1h2v6H3V8z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconUnlockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
