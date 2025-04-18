import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerCheckIcon],svg[hugeicons-computer-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.999 11c-.008 2.626-.086 4.044-.813 5.081a4.5 4.5 0 0 1-1.105 1.105C18.92 18 17.28 18 14 18h-4c-3.28 0-4.919 0-6.081-.814a4.5 4.5 0 0 1-1.105-1.105C2 14.92 2 13.28 2 10s0-4.919.814-6.081a4.5 4.5 0 0 1 1.105-1.105C5.08 2 6.72 2 10 2h1.5"></svg:path><svg:path d="M14 6s1 0 2 2c0 0 3.177-5 6-6M11 15h2m-1 3v4m-4 0h8"></svg:path></svg:g>`,
})
export class HugeiconsComputerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
