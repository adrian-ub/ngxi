import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBaseusIcon],svg[arcticons-baseus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m6.306 29.335S17.984 37.77 24 37.77s8.194-2.936 8.194-2.936M15.22 21.456c0 4.811 3.931 8.712 8.78 8.712s8.78-3.9 8.78-8.712s-3.931-8.711-8.78-8.711s-8.78 3.9-8.78 8.711l1.26-11.227"></svg:path>`,
})
export class ArcticonsBaseusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
