import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilStudioBackdropIcon],svg[pepicons-pencil-studio-backdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.5 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zm12 0h-11v7h11z"></svg:path><svg:path d="M2.25 2.5a.5.5 0 0 1 .5-.5h14.5a.5.5 0 0 1 0 1H2.75a.5.5 0 0 1-.5-.5m2.24 7.598L3.11 17h13.78l-1.38-6.902l.98-.196l1.38 6.902A1 1 0 0 1 16.89 18H3.11a1 1 0 0 1-.98-1.196l1.38-6.902z"></svg:path></svg:g>`,
})
export class PepiconsPencilStudioBackdropIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
