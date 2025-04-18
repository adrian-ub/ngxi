import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsContraceptiveDiaphragm24pxIcon],svg[healthicons-contraceptive-diaphragm-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.945 14.015C3.688 9.391 7.368 5.5 12 5.5s8.312 3.89 8.055 8.515L20 15.028a.5.5 0 0 1-.499.472h-15a.5.5 0 0 1-.5-.472zm4.726-3.18c.21-.418.525-.836.88-1.14c.363-.312.695-.445.949-.445a.75.75 0 0 0 0-1.5c-.746 0-1.414.367-1.926.806a5.3 5.3 0 0 0-1.245 1.609a.75.75 0 1 0 1.342.67" clip-rule="evenodd"></svg:path><svg:path d="M2 15.5A1.5 1.5 0 0 1 3.5 14h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 15.5"></svg:path></svg:g>`,
})
export class HealthiconsContraceptiveDiaphragm24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
