import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKnifeIcon],svg[mdi-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 2c3.35 5.61-8.15 18.15-8.15 18.15L9.6 17.28L4.91 22l-2.14-2.14z"></svg:path>`,
})
export class MdiKnifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
