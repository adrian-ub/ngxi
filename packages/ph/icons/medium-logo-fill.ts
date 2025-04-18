import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoFillIcon],svg[ph-medium-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m48-64c-5.68 0-16.4 2.76-24.32 21.25C154.73 96.8 152 112 152 128s2.73 31.2 7.68 42.75C167.6 189.24 178.32 192 184 192s16.4-2.76 24.32-21.25C213.27 159.2 216 144 216 128s-2.73-31.2-7.68-42.75C200.4 66.76 189.68 64 184 64m56 0a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0V72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhMediumLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
