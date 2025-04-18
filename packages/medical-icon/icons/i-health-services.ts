import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[medicalIconIHealthServicesIcon],svg[medical-icon-i-health-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.822 62.675h20.424V42.248h20.429V21.809H42.246V1.383H21.822v20.426H1.388v20.439h20.434z"></svg:path>`,
})
export class MedicalIconIHealthServicesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
