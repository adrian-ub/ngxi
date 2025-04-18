import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsHeart20SolidIcon],svg[heroicons-heart-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.653 16.915l-.005-.003l-.019-.01l-.067-.035l-.243-.135a22 22 0 0 1-3.434-2.412C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22 22 0 0 1-3.744 2.582l-.019.01l-.005.003h-.002a.74.74 0 0 1-.69.001z"></svg:path>`,
})
export class HeroiconsHeart20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
