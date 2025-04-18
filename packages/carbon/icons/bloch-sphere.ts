import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBlochSphereIcon],svg[carbon-bloch-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.87 7.84l-1.74-1L16 14a2 2 0 1 0 2 2a2 2 0 0 0-.27-1z" fill="currentColor"></svg:path><svg:path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 2a12 12 0 0 1 11.17 7.65a25.69 25.69 0 0 0-3.69-1.5l-1 1.77a22.7 22.7 0 0 1 5.41 2.39a11.05 11.05 0 0 1 0 3.38A22.92 22.92 0 0 1 16 21a22.92 22.92 0 0 1-11.87-3.31a11.05 11.05 0 0 1 0-3.38A22.8 22.8 0 0 1 15 11V9a25 25 0 0 0-10.17 2.6A12 12 0 0 1 16 4zm0 24a12 12 0 0 1-11.17-7.65A24.88 24.88 0 0 0 16 23a24.88 24.88 0 0 0 11.17-2.65A12 12 0 0 1 16 28z" fill="currentColor"></svg:path>`,
})
export class CarbonBlochSphereIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
