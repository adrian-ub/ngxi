import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons7mindIcon],svg[arcticons-7mind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.528 16.431V31.57a4.36 4.36 0 0 0 2.181 3.778l13.11 7.569a4.36 4.36 0 0 0 4.362 0l13.11-7.57a4.36 4.36 0 0 0 2.181-3.777V16.43a4.36 4.36 0 0 0-2.18-3.778l-13.11-7.569a4.36 4.36 0 0 0-4.363 0l-13.11 7.57a4.36 4.36 0 0 0-2.18 3.777"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.304 41.408l9.334-17.347H17.146"></svg:path>`,
})
export class Arcticons7mindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
