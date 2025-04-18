import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPizzaIcon],svg[mdi-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2M7 7c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m5-5C8.43 2 5.23 3.54 3 6l9 16l9-16c-2.22-2.46-5.43-4-9-4"></svg:path>`,
})
export class MdiPizzaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
