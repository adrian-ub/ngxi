import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkilterIcon],svg[arcticons-skilter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.144 17.106A9.75 9.75 0 1 0 24 24m2.856 6.894A9.75 9.75 0 1 0 24 24"></svg:path><svg:circle cx="14.25" cy="24" r="6.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.75" cy="24" r="6.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.75 26.5l5-5m-5 0l5 5m20.449-4.654l-4.667 4.667l-2.333-2.334"></svg:path>`,
})
export class ArcticonsSkilterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
