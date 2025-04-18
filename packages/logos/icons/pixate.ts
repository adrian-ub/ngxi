import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPixateIcon],svg[logos-pixate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M148.576 67.064l-14.174 53.712h14.92c50.728 0 67.14-26.856 85.044-69.378l20.888-49.982c-70.87-5.222-91.758 8.952-106.678 65.648" fill="#3EC4FC"></svg:path><svg:path d="M.868 2.162l20.888 49.982c17.904 42.522 34.316 69.378 85.044 69.378h14.92L107.546 67.81C92.626 10.368 71.738-3.806.868 2.162" fill="#FFBD00"></svg:path><svg:path d="M107.546 193.138l14.174-53.712H106.8c-50.728 0-67.14 26.856-85.044 69.378L.868 258.786c70.87 5.222 91.758-8.952 106.678-65.648" fill="#F18B37"></svg:path><svg:path d="M255.254 258.04l-20.888-49.982c-17.904-42.522-34.316-69.378-85.044-69.378h-14.92l14.174 53.712c14.92 57.442 35.808 71.616 106.678 65.648" fill="#0090DB"></svg:path>`,
})
export class LogosPixateIcon {
  readonly viewBox = input("0 0 256 260")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
