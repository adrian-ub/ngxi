import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2Icon],svg[healthicons-pills-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 26c5.523 0 10-4.477 10-10S21.523 6 16 6S6 10.477 6 16s4.477 10 10 10m4.304-10.692a1 1 0 0 0-.762-1.849l-7.846 3.233a1 1 0 1 0 .763 1.85zM32 42c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10m3.91-8.075a1 1 0 1 0 .449-1.949l-8.27-1.901a1 1 0 1 0-.448 1.949z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPills2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
