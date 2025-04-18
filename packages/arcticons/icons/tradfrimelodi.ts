import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTradfrimelodiIcon],svg[arcticons-tradfrimelodi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.935 43.5h14.13M24 14.808V43.5m5.047-39H18.953l-5 10.308h20.094z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="28.963" cy="36.79" r="2.888"></svg:circle><svg:path d="m33 26.907l-3.224.686l2.017 8.631"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="18.658" cy="26.951" r="1.723"></svg:circle><svg:path d="m21.067 21.054l-1.924.41l1.203 5.149"></svg:path></svg:g>`,
})
export class ArcticonsTradfrimelodiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
