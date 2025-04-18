import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLibraryMathsSolidIcon],svg[bubbles-library-maths-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5h-5A1.5 1.5 0 0 0 0 6.5v16A1.5 1.5 0 0 0 1.5 24h12a1.5 1.5 0 0 0 1.5-1.5v-7.25H2a.75.75 0 1 1 0-1.5h1.25a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v4.75a.5.5 0 0 0 .5.5H15V12.5S8.59 10.72 6.5 5M5 22a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5zm4.83.28l-1.43.46a.5.5 0 0 1-.63-.31l-1.24-3.81a.5.5 0 0 1 .31-.62l1.43-.46a.5.5 0 0 1 .63.31l1.25 3.81a.51.51 0 0 1-.32.62M23 9.29h-6.6a1 1 0 1 0 0 2H23a1 1 0 1 0 0-2m-3.3-.99a1.32 1.32 0 1 0 0-2.64a1.32 1.32 0 0 0 0 2.64m0 6.61a1.32 1.32 0 1 0 0-2.64a1.32 1.32 0 0 0 0 2.64M16.4 4.3a1 1 0 0 0-1-1h-1.65a.66.66 0 0 1-.66-.67V1a1 1 0 0 0-2 0v1.64a.66.66 0 0 1-.66.67H8.79a1 1 0 0 0 0 2h1.65a.66.66 0 0 1 .66.69v1.6a1 1 0 1 0 2 0V6a.66.66 0 0 1 .66-.66h1.64a1 1 0 0 0 1-1.04"></svg:path>`,
})
export class BubblesLibraryMathsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
