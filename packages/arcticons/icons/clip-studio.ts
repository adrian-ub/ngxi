import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClipStudioIcon],svg[arcticons-clip-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.652 42.5l-4.672-7.023l13.044-6.682c6.388-3.273 8.324-10.803 4.322-16.819h0C35.345 5.961 26.922 3.737 20.533 7.01l-10.6 5.43c-3.354 1.718-4.37 5.671-2.27 8.83h0c2.101 3.157 6.523 4.324 9.877 2.606l9.395-4.813"></svg:path>`,
})
export class ArcticonsClipStudioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
