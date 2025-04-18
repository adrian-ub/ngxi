import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeLottieIcon],svg[material-icon-theme-lottie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="M2 4v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m20.237 8.11c-2.974.426-3.518 2.058-4.34 4.523c-.92 2.764-2.145 6.436-7.635 7.217a1.996 1.996 0 1 1-.499-3.96c2.974-.426 3.518-2.058 4.34-4.523c.92-2.764 2.145-6.436 7.635-7.217a1.996 1.996 0 1 1 .499 3.96"></svg:path>`,
})
export class MaterialIconThemeLottieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
