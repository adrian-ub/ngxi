import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDecisionsIcon],svg[arcticons-decisions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.2 33c-3.19 0-6.65 4.27-10.28 4.27S4.5 33.62 4.5 33.62M25.8 33c3.19 0 6.65 4.27 10.28 4.27s7.42-3.62 7.42-3.62"></svg:path><svg:circle cx="24" cy="32.97" r="1.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.17v-4.65M6.64 19.43l8.67-8.67m27.73 0l-8.67 8.67l-3.83-3.83M24 15.09l-5.54 11.43h11.08zM6.64 10.76l8.67 8.67M24 34.77v.71"></svg:path>`,
})
export class ArcticonsDecisionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
