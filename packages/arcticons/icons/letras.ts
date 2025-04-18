import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetrasIcon],svg[arcticons-letras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.989 18.074L21.279 5.5l7.979 10.26l12.977-.753l-7.29 10.76l4.733 12.107l-12.49-3.608L17.13 42.5l-.425-12.988l-10.94-7.014z"></svg:path>`,
})
export class ArcticonsLetrasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
