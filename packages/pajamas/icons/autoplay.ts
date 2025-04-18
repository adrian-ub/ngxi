import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasAutoplayIcon],svg[pajamas-autoplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.194.665a8 8 0 1 0 4.194 10.404a.75.75 0 0 0-1.385-.575a6.5 6.5 0 1 1-.526-5.994H11.75a.75.75 0 0 0 0 1.5H16V1.75a.75.75 0 0 0-1.5 0v1.586a8 8 0 0 0-3.306-2.67Zm-.423 6.913a.5.5 0 0 1 0 .844l-4.003 2.54A.5.5 0 0 1 6 10.538V5.461a.5.5 0 0 1 .768-.422z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasAutoplayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
