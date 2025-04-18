import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCompactDiscIcon],svg[fa6-solid-compact-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m256 32a32 32 0 1 1 0-64a32 32 0 1 1 0 64m-96-32a96 96 0 1 0 192 0a96 96 0 1 0-192 0m-64-16c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16"></svg:path>`,
})
export class Fa6SolidCompactDiscIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
