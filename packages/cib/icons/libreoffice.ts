import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibLibreofficeIcon],svg[cib-libreoffice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.818 0a.8.8 0 0 0-.74.469a.78.78 0 0 0 .172.849l6.646 6.661a.81.81 0 0 0 .849.177a.79.79 0 0 0 .484-.708V.771A.807.807 0 0 0 28.448 0zM3.547 0a.787.787 0 0 0-.776.786v30.427c0 .432.349.781.776.786h24.896a.79.79 0 0 0 .786-.786V11.619a.8.8 0 0 0-.229-.557L18.234.244a.8.8 0 0 0-.563-.245zm.786 1.578h13.005l10.313 10.359v18.484H4.333z"></svg:path>`,
})
export class CibLibreofficeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
