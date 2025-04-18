import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStoriIcon],svg[arcticons-stori-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37 15.5v-9a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2V9a2 2 0 0 1-2 2h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h11v-4.5a2 2 0 0 1 2-2h9a2 2 0 0 0 2-2m-26 17v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V39a2 2 0 0 1 2-2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H24v4.5a2 2 0 0 1-2 2h-9a2 2 0 0 0-2 2"></svg:path>`,
})
export class ArcticonsStoriIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
