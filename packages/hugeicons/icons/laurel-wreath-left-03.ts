import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaurelWreathLeft03Icon],svg[hugeicons-laurel-wreath-left-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.989 6.5s1.832-.066 2.673-1.566c.84-1.5-.15-2.934-.15-2.934s-1.833.066-2.674 1.566c-.84 1.5.15 2.934.15 2.934m.195 0c-1.463 2.099-3.317 6.975.976 9.688c5.365 3.39 5.853 4.359 6.341 5.812"></svg:path><svg:path d="M16.032 18.5s-3.572-1.364-1.53-5c0 0 4.082 1.364 1.53 5"></svg:path><svg:path d="M16 19s-2.367-3.075-5.5.105c0 0 2.508 3.577 5.5-.105m-6.51-6.06s.398-4.086-3.96-3.936c0 0-.636 4.572 3.96 3.935"></svg:path><svg:path d="M9.51 12.5s-.398-4.085 3.96-3.935c0 0 .636 4.572-3.96 3.935"></svg:path></svg:g>`,
})
export class HugeiconsLaurelWreathLeft03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
