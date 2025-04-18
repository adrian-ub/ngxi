import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsComputerIcon],svg[proicons-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="18.5" height="15.031" x="2.75" y="2.75" rx="3.5"></svg:rect><svg:path d="M9.11 17.781v3.469m5.78-3.469v3.469m-8.382 0h10.984"></svg:path></svg:g>`,
})
export class ProiconsComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
