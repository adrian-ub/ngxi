import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCefta4x3Icon],svg[flag-cefta-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039" d="M0 0h640v480H0z"></svg:path><svg:circle cx="320" cy="249.8" r="30.4" fill="none" stroke="#fc0" stroke-width="27.5"></svg:circle><svg:circle cx="320" cy="249.8" r="88.3" fill="none" stroke="#fc0" stroke-width="27.5"></svg:circle><svg:path fill="#039" d="m404.7 165.1l84.7 84.7l-84.7 84.7l-84.7-84.7z"></svg:path><svg:path fill="#fc0" d="M175.7 236.1h59.2v27.5h-59.2zm259.1 0h88.3v27.5h-88.3zM363 187.4l38.8-38.8l19.4 19.5l-38.7 38.7zM306.3 48.6h27.5v107.1h-27.5z"></svg:path><svg:circle cx="225.1" cy="159.6" r="13.7" fill="#fc0"></svg:circle><svg:circle cx="144.3" cy="249.8" r="13.7" fill="#fc0"></svg:circle><svg:circle cx="320" cy="381.4" r="13.7" fill="#fc0"></svg:circle><svg:circle cx="320" cy="425.5" r="13.7" fill="#fc0"></svg:circle><svg:circle cx="408.3" cy="249.8" r="13.7" fill="#fc0"></svg:circle><svg:path fill="#fc0" d="m208.3 341.5l19.5-19.4l19.4 19.4l-19.4 19.5zm204.7 21l19.5-19.5l19.5 19.5l-19.5 19.4z"></svg:path>`,
})
export class FlagCefta4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
