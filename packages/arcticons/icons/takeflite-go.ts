import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTakefliteGoIcon],svg[arcticons-takeflite-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14.75" cy="14.75" r="9.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.625 6.74a9.25 9.25 0 1 1-1.916 14.55M24 14.75a9.25 9.25 0 0 1 2.164-5.946M14.75 24a9.25 9.25 0 1 1-9.25 9.25"></svg:path>`,
})
export class ArcticonsTakefliteGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
