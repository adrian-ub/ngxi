import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardThinIcon],svg[ph-skip-forward-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36a4 4 0 0 0-4 4v76.44L70.31 37.84a12 12 0 0 0-12.18-.32A11.69 11.69 0 0 0 52 47.88v160.24a11.69 11.69 0 0 0 6.13 10.36a12 12 0 0 0 12.18-.32L196 139.56V216a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-5.82 95.26L66.06 211.38a4 4 0 0 1-4.06.11a3.8 3.8 0 0 1-2-3.37V47.88a3.8 3.8 0 0 1 2-3.37a4 4 0 0 1 2-.51a4 4 0 0 1 2.11.62l128.12 80.12a3.83 3.83 0 0 1 0 6.52Z"></svg:path>`,
})
export class PhSkipForwardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
