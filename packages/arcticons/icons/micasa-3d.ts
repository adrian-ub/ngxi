import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicasa3dIcon],svg[arcticons-micasa-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.87 26.12a4.42 4.42 0 0 1 4.418-4.418h0a4.42 4.42 0 0 1 4.42 4.419v7.291m-8.839-11.71v11.71"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.707 26.12a4.42 4.42 0 0 1 4.42-4.418h0a4.42 4.42 0 0 1 4.418 4.419v7.291"></svg:path><svg:circle cx="33.234" cy="18.484" r="3.896" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.234 26.247v7.165"></svg:path>`,
})
export class ArcticonsMicasa3dIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
