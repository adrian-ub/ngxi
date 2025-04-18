import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGetPocketIcon],svg[meteor-icons-get-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3a2 2 0 0 1 2 2v6a9 9 0 0 1-22 0V5a2 2 0 0 1 2-2ZM7 10l5 4l5-4"></svg:path>`,
})
export class MeteorIconsGetPocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
