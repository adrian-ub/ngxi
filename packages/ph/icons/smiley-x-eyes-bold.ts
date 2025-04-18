import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSmileyXEyesBoldIcon],svg[ph-smiley-x-eyes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m56.49-92.49a12 12 0 0 1-17 17L162 131l-5.51 5.52a12 12 0 0 1-17-17L145 114l-5.52-5.51a12 12 0 0 1 17-17L162 97l5.51-5.52a12 12 0 0 1 17 17L179 114Zm-68 17a12 12 0 0 1-17 0L94 131l-5.51 5.52a12 12 0 0 1-17-17L77 114l-5.52-5.51a12 12 0 0 1 17-17L94 97l5.51-5.52a12 12 0 0 1 17 17L111 114l5.52 5.51a12 12 0 0 1-.03 16.98ZM144 180a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhSmileyXEyesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
