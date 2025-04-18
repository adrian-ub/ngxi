import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDumbbell01Icon],svg[hugeicons-dumbbell-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.735 13.732s.905-1.222 1.5-1.5c1.795-.84 2.16-1.206 3-3.001c.278-.595 1.5-1.5 1.5-1.5m-3.5 8.502s1.222-.906 1.5-1.5c.84-1.796 1.205-2.161 3-3.001c.594-.279 1.5-1.501 1.5-1.501m-1.804-7.339a1.3 1.3 0 0 1 1.839-.002l4.811 4.798a1.3 1.3 0 0 1 .003 1.839l-1.528 1.534a1.3 1.3 0 0 1-1.839.003l-4.812-4.799a1.3 1.3 0 0 1-.002-1.839zM4.414 12.903a1.3 1.3 0 0 1 1.838-.003l4.812 4.798a1.3 1.3 0 0 1 .003 1.839L9.538 21.07a1.3 1.3 0 0 1-1.838.003l-4.812-4.798a1.3 1.3 0 0 1-.003-1.84zm13.524-9.45c1.882-2.468 5.202.387 2.605 2.576M3.378 17.977c-2.38 1.992.62 5.182 2.69 2.489" color="currentColor"></svg:path>`,
})
export class HugeiconsDumbbell01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
