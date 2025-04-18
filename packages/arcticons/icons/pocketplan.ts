import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPocketplanIcon],svg[arcticons-pocketplan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.123 5.5H9.484v37h10.55V31.98h7.089c6.294 0 11.396-5.102 11.396-11.396v-3.687c0-6.294-5.102-11.397-11.396-11.397m8.332 3.619L9.481 29.998"></svg:path>`,
})
export class ArcticonsPocketplanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
