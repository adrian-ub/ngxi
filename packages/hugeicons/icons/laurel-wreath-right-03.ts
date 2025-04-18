import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaurelWreathRight03Icon],svg[hugeicons-laurel-wreath-right-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.011 6.5s-1.832-.066-2.673-1.566c-.84-1.5.15-2.934.15-2.934s1.833.066 2.674 1.566c.84 1.5-.15 2.934-.15 2.934m-.195 0c1.463 2.099 3.317 6.975-.976 9.688C6.477 19.578 5.989 20.547 5.5 22"></svg:path><svg:path d="M7.968 18.5s3.572-1.364 1.53-5c0 0-4.082 1.364-1.53 5"></svg:path><svg:path d="M8 19s2.367-3.075 5.5.105c0 0-2.508 3.577-5.5-.105m6.51-6.06s-.398-4.086 3.96-3.936c0 0 .636 4.572-3.96 3.935"></svg:path><svg:path d="M14.49 12.5s.398-4.085-3.96-3.935c0 0-.636 4.572 3.96 3.935"></svg:path></svg:g>`,
})
export class HugeiconsLaurelWreathRight03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
