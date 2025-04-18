import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons0Icon],svg[healthicons-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 14a4 4 0 0 0-4 4v11.38l9.25-15.18A4 4 0 0 0 26 14zm7.96 3.436l-9.814 16.11A4 4 0 0 0 22 34h4a4 4 0 0 0 4-4V18q0-.287-.04-.564M14 18a8 8 0 0 1 8-8h4a7.98 7.98 0 0 1 5.334 2.037A8 8 0 0 1 34 18v12a8 8 0 0 1-8 8h-4c-2.37 0-4.5-1.033-5.962-2.666A7.98 7.98 0 0 1 14 30z" clip-rule="evenodd"></svg:path>`,
})
export class Healthicons0Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
