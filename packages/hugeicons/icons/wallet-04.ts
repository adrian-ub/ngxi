import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallet04Icon],svg[hugeicons-wallet-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.002 3.6c.12-.07.26-.1.39-.1c.48 0 .86.39.86.86V8h-9.82zM2.252 8.75c0-.81.45-1.55 1.17-1.92l8.89-4.57a2.364 2.364 0 0 1 3.44 2.1V8c1.05 0 1.93.02 2.64.12c.9.12 1.66.38 2.26.98s.86 1.36.98 2.26c.12.87.12 1.97.12 3.34v1.1c0 1.37 0 2.47-.12 3.34c-.12.9-.38 1.66-.98 2.26s-1.36.86-2.26.98c-.87.12-1.97.12-3.34.12h-6.11c-1.37 0-2.47 0-3.34-.12c-.9-.12-1.66-.38-2.26-.98s-.86-1.36-.98-2.26c-.12-.87-.12-1.97-.12-3.34V8.75zm12.75.75c1.44 0 2.44 0 3.19.1c.73.1 1.12.28 1.4.56s.46.66.56 1.4c.1.75.1 1.75.1 3.19v1c0 1.44 0 2.44-.1 3.19c-.1.74-.28 1.12-.56 1.4s-.67.46-1.4.56c-.76.1-1.76.1-3.19.1h-6c-1.44 0-2.44 0-3.19-.1c-.73-.1-1.12-.28-1.4-.56s-.46-.66-.56-1.4c-.1-.75-.1-1.75-.1-3.19V9.5z" color="currentColor"></svg:path>`,
})
export class HugeiconsWallet04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
