import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherEditIcon],svg[feather-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></svg:path><svg:path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4z"></svg:path></svg:g>`,
})
export class FeatherEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
