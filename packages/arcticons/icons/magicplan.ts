import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMagicplanIcon],svg[arcticons-magicplan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.5 42.5h6a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 30.956v-8.662c0-2.9-2.35-5.25-5.25-5.25h0a5.25 5.25 0 0 0-5.25 5.25m21 8.662v-8.662c0-2.9-2.35-5.25-5.25-5.25h0a5.25 5.25 0 0 0-5.25 5.25m-10.5 8.662V17.044"></svg:path>`,
})
export class ArcticonsMagicplanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
