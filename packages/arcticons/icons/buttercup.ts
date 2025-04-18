import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsButtercupIcon],svg[arcticons-buttercup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.616 16.09a11.59 11.59 0 1 1 23.179 0m0 4.23H6.615V43.5h23.18m0-23.18a11.59 11.59 0 0 1 11.59 11.59h0a11.59 11.59 0 0 1-11.59 11.59h0M6.616 20.32v-4.23m23.179 4.23v-4.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.038 32.492a3.16 3.16 0 1 1 2.162 0m-2.162 0l-.008 3.394m2.17-3.394v3.394m0 0a1.085 1.085 0 0 1-2.17 0"></svg:path>`,
})
export class ArcticonsButtercupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
