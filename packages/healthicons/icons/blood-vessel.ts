import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBloodVesselIcon],svg[healthicons-blood-vessel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 6v19.38l-2.926-2.02l.092-.01l-.966-8.757l-1.987.22l.784 7.112l-6.617-4.568l-1.507 6.027l4.42 3.49l-4.055 1.021l.489 1.94l5.547-1.398l6.348 5.012l.006.005a.95.95 0 0 1 .372.755V42h10V27.113a.94.94 0 0 1 .519-.829l5.151-2.673l7.593 1.847l.473-1.943l-5.438-1.323l5.98-3.248l-2.269-5.293l-7.576 3.597l1.043-4.736l-1.953-.43l-1.38 6.266L28 19.43V6zm5.227 2.85a1 1 0 1 1-1.7 1.055a1 1 0 0 1 1.7-1.055m1.678 5.377a1 1 0 1 0-1.055-1.7a1 1 0 0 0 1.055 1.7m-2 9a1 1 0 1 0-1.055-1.7a1 1 0 0 0 1.055 1.7m1.322 5.622a1 1 0 1 1-1.7 1.056a1 1 0 0 1 1.7-1.056m-1.322 10.378a1 1 0 1 0-1.055-1.7a1 1 0 0 0 1.055 1.7" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsBloodVesselIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
