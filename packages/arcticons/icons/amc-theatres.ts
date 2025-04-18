import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmcTheatresIcon],svg[arcticons-amc-theatres-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.163 23.333a3.821 3.821 0 1 0-7.643 0v5.156"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.163 28.489v-5.156a3.821 3.821 0 1 1 7.642 0v5.156m-17.785 0v-8.977h-1.543A8.977 8.977 0 0 0 4.5 28.488h8.047M43.5 25.515a4.49 4.49 0 0 1-4.223 2.979c-2.478 0-4.494-2.016-4.494-4.494s2.016-4.494 4.494-4.494a4.49 4.49 0 0 1 4.223 2.98"></svg:path>`,
})
export class ArcticonsAmcTheatresIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
