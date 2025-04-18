import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAsanaIcon],svg[lineicons-asana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.35 7.12A4.355 4.355 0 0 1 12 11.47a4.355 4.355 0 0 1-4.35-4.35A4.355 4.355 0 0 1 12 2.77a4.31 4.31 0 0 1 4.35 4.35m-10 5.41A4.355 4.355 0 0 0 2 16.88a4.355 4.355 0 0 0 4.35 4.35a4.355 4.355 0 0 0 4.349-4.35a4.334 4.334 0 0 0-4.35-4.35m11.3 0a4.355 4.355 0 0 0-4.349 4.35a4.355 4.355 0 0 0 4.35 4.35A4.355 4.355 0 0 0 22 16.88a4.334 4.334 0 0 0-4.35-4.35"></svg:path>`,
})
export class LineiconsAsanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
