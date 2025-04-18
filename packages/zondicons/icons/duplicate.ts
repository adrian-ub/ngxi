import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsDuplicateIcon],svg[zondicons-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2zm2 0h4a2 2 0 0 1 2 2v4h4V2H8zM2 8v10h10V8zm4 4v-2h2v2h2v2H8v2H6v-2H4v-2z"></svg:path>`,
})
export class ZondiconsDuplicateIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
