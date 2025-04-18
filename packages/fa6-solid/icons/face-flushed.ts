import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFaceFlushedIcon],svg[fa6-solid-face-flushed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m176 128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16m-16-88a72 72 0 1 0 0-144a72 72 0 1 0 0 144m264-72a72 72 0 1 0-144 0a72 72 0 1 0 144 0m-288 0a24 24 0 1 1 48 0a24 24 0 1 1-48 0m192 0a24 24 0 1 1 48 0a24 24 0 1 1-48 0"></svg:path>`,
})
export class Fa6SolidFaceFlushedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
