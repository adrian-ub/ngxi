import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity12FilledIcon],svg[tdesign-city-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h8v8h4V5h8v17h-9v-7h-2v7H2zm2 18h2V10h2V4H4zm12-10h2v10h2V7h-4z"></svg:path>`,
})
export class TdesignCity12FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
