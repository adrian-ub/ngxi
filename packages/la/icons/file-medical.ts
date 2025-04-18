import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileMedicalIcon],svg[la-file-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM15 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaFileMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
