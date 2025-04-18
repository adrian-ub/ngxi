import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlipboardIcon],svg[arcticons-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 5.5h33a2 2 0 0 1 2 2v8.33a2 2 0 0 1-2 2H30.17v9.93a2.41 2.41 0 0 1-2.41 2.41h-9.93V40.5a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-33a2 2 0 0 1 2-2"></svg:path>`,
})
export class ArcticonsFlipboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
