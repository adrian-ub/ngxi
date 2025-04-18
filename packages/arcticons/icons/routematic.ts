import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRoutematicIcon],svg[arcticons-routematic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 29.579V16.42h4.307c2.436 0 4.41 1.979 4.41 4.42s-1.974 4.418-4.41 4.418H11.5m4.307.001l4.307 4.316m3.229-5.424a3.29 3.29 0 0 1 3.29-3.29h0a3.29 3.29 0 0 1 3.289 3.29v5.427m-6.579-8.716v8.716"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.922 24.151a3.29 3.29 0 0 1 3.289-3.29h0a3.29 3.29 0 0 1 3.29 3.29v5.427"></svg:path>`,
})
export class ArcticonsRoutematicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
