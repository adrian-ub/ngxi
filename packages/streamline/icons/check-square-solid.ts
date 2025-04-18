import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckSquareSolidIcon],svg[streamline-check-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0A3.5 3.5 0 0 0 0 3.5v7A3.5 3.5 0 0 0 3.5 14h7a3.5 3.5 0 0 0 3.5-3.5v-7A3.5 3.5 0 0 0 10.5 0zm7.003 5.219A.75.75 0 0 0 9.33 4.28L5.786 8.714L4.367 7.65a.75.75 0 1 0-.9 1.2l2 1.5a.75.75 0 0 0 1.036-.131z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCheckSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
