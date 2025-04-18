import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHeartCircleSolidIcon],svg[teenyicons-heart-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m4.146-2.354a1.914 1.914 0 0 1 2.707 0l.647.647l.646-.647a1.914 1.914 0 0 1 2.707 2.708L7.5 11.207L4.146 7.854a1.914 1.914 0 0 1 0-2.708" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsHeartCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
