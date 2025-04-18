import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerVideoIcon],svg[hugeicons-computer-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 15h2m-1 3v4m-4 0h8M9 2.001c-2.625.008-4.043.086-5.081.813a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105c.727-1.037.805-2.456.813-5.081"></svg:path><svg:path d="m19.5 4.146l.063-.045c1.058-.764 1.587-1.146 2.012-.961S22 3.935 22 5.158v.684c0 1.223 0 1.834-.425 2.018c-.425.185-.954-.197-2.012-.96l-.063-.046M15.5 9h.5c1.65 0 2.475 0 2.987-.448c.513-.449.513-1.17.513-2.614v-.875c0-1.444 0-2.166-.513-2.615C18.475 2 17.65 2 16 2h-.5c-1.65 0-2.475 0-2.987.448C12 2.897 12 3.618 12 5.063v.875c0 1.443 0 2.165.513 2.614C13.025 9 13.85 9 15.5 9"></svg:path></svg:g>`,
})
export class HugeiconsComputerVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
