import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonForward5Icon],svg[carbon-forward-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18A10 10 0 1 1 16 8h4v5l6-6l-6-6v5h-4a12 12 0 1 0 12 12Z"></svg:path><svg:path fill="currentColor" d="M18.58 15.58h-3.45L15 18.15a5 5 0 0 1 .26-.45a1.6 1.6 0 0 1 .33-.35a1.5 1.5 0 0 1 .44-.23a2 2 0 0 1 .6-.08a2.5 2.5 0 0 1 .92.16a2.1 2.1 0 0 1 .74.48a2.3 2.3 0 0 1 .5.77a2.7 2.7 0 0 1 .18 1a2.9 2.9 0 0 1-.19 1.07a2.4 2.4 0 0 1-.55.84a2.4 2.4 0 0 1-.89.55a3.2 3.2 0 0 1-1.21.2a3.8 3.8 0 0 1-.94-.11a3 3 0 0 1-.74-.32a2.5 2.5 0 0 1-.55-.45a4 4 0 0 1-.41-.55l1.06-.81l.27.41a1.8 1.8 0 0 0 .34.34a1.6 1.6 0 0 0 .43.22a1.5 1.5 0 0 0 .55.08a1.3 1.3 0 0 0 1-.36a1.4 1.4 0 0 0 .33-1v-.06a1.18 1.18 0 0 0-1.28-1.27a1.44 1.44 0 0 0-.77.18a2 2 0 0 0-.48.39l-1.19-.17l.29-4.31h4.52Z"></svg:path>`,
})
export class CarbonForward5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
