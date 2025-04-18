import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSlidersVIcon],svg[uil-sliders-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6H6V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-2 4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V11a1 1 0 0 0-1-1m7 8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m9-8h-1V3a1 1 0 0 0-2 0v7h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m-5 0h-1V3a1 1 0 0 0-2 0v11h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSlidersVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
