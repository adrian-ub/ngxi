import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRollerbladeIcon],svg[mdi-rollerblade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 18a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5m14 0a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5m1.5-1c0-1.37.09-3.19-.5-4.05c-.95-2.05-3.68-2.39-5.59-2.9C13 10 12 9 11.82 8H9a.49.49 0 0 1-.5-.5c0-.28.21-.5.5-.5h2.5V6H9a.49.49 0 0 1-.5-.5c0-.28.21-.5.5-.5h2.5V2H3v15zm-8.5 1a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class MdiRollerbladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
