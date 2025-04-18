import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsComputerMacIcon],svg[proicons-computer-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 6.25a3.5 3.5 0 0 1 3.5-3.5h11.5a3.5 3.5 0 0 1 3.5 3.5v8.031a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5zm0 7.75h18.5M9.11 17.781v1.469a2 2 0 0 1-2 2h-.6m8.38-3.469v1.469a2 2 0 0 0 2 2h.6m-10.982 0h10.984"></svg:path>`,
})
export class ProiconsComputerMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
