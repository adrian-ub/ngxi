import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsComputrabajoIcon],svg[arcticons-computrabajo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 36.27c2.6.5 5.1.99 7.8.93s5.5-.67 7.6-1.4c2.1-.7 3.6-1.5 5.1-2.3m-3.472-21.378v15.89a2.67 2.67 0 0 0 2.67 2.67h.802m-6.276-14.154h5.608m-8.615 6.99v.087a7.077 7.077 0 0 1-7.077 7.077h0a7.077 7.077 0 0 1-7.077-7.077v-7.21a7.077 7.077 0 0 1 7.077-7.077h0a7.077 7.077 0 0 1 7.077 7.077v.133"></svg:path>`,
})
export class ArcticonsComputrabajoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
