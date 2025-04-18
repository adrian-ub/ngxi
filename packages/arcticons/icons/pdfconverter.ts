import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPdfconverterIcon],svg[arcticons-pdfconverter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31.2" height="39" x="8.4" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28 27.32l7.4 10.73a.56.56 0 0 1-.45.87h-21.9a.56.56 0 0 1-.39-1l6.14-6.13a.54.54 0 0 1 .78 0l1.09 1.08a.54.54 0 0 0 .78 0l5.68-5.68a.55.55 0 0 1 .87.13M19.55 9.08H12.5v11.15l3.53-3.03l3.52 3.03z"></svg:path>`,
})
export class ArcticonsPdfconverterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
