import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOhHiIcon],svg[arcticons-oh-hi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7.5 5.5a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm20 0a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm-20 20a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Z"></svg:path>`,
})
export class ArcticonsOhHiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
