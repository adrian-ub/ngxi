import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fePizzaIcon],svg[fe-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-5h2v2zm10 0l-2 2v-2zM9 7v2H7zm6 0l2 2h-2zm-2.5 2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-5 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m9 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FePizzaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
