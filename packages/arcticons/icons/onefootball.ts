import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnefootballIcon],svg[arcticons-onefootball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.941 7.926C16.297 40.171 16.53 39.862 16.53 39.862M35.726 8.06L24.621 40.075"></svg:path><svg:path fill="none" stroke="currentColor" d="m16.53 39.861l8.092.213m3.319-32.148l7.785.135"></svg:path><svg:ellipse cx="35.928" cy="33.403" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.572" ry="6.671"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.621 8.04c0 4.589-1.577 8.37-6.225 11.63c-4.399 3.085-9.83 3.057-12.895 1.606M24.621 8.04l-6.801-.046a6.32 6.32 0 0 1-3.36 5.871a9.57 9.57 0 0 1-6.616.876m0-.001L5.5 21.277"></svg:path>`,
})
export class ArcticonsOnefootballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
