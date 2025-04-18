import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeituIcon],svg[arcticons-meitu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 29.25v-6.19a1.885 1.885 0 0 1 2.478-1.79l2.33.772a4.26 4.26 0 0 0 3.502-.374l4.49-2.645a1.658 1.658 0 0 1 2.5 1.428v1.299a1.574 1.574 0 0 0 2.304 1.394L37 18.75m-3.5 10.5v-8.5"></svg:path>`,
})
export class ArcticonsMeituIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
