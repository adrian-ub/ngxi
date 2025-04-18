import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRhombusIcon],svg[hugeicons-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.914 5.996C9.312 3.332 10.51 2 12 2s2.688 1.332 5.086 3.996l.318.353C19.8 9.013 21 10.345 21 12s-1.199 2.987-3.596 5.651l-.318.353C14.688 20.668 13.49 22 12 22s-2.688-1.332-5.086-3.996l-.318-.353C4.2 14.987 3 13.655 3 12s1.199-2.987 3.596-5.651z" color="currentColor"></svg:path>`,
})
export class HugeiconsRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
