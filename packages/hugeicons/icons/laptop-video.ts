import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaptopVideoIcon],svg[hugeicons-laptop-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 15V7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h1m11 12v-3.5M3.498 16.015L4.02 15h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989s-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996c-.549-.996-.19-2.327 1.254-4.989M19.5 4.146l.063-.045c1.058-.764 1.587-1.146 2.012-.961S22 3.935 22 5.158v.684c0 1.223 0 1.834-.425 2.018c-.425.185-.954-.197-2.012-.96l-.063-.046M15.5 9h.5c1.65 0 2.475 0 2.987-.448c.513-.449.513-1.17.513-2.614v-.875c0-1.444 0-2.166-.513-2.615C18.475 2 17.65 2 16 2h-.5c-1.65 0-2.475 0-2.987.448C12 2.897 12 3.618 12 5.063v.875c0 1.443 0 2.165.513 2.614C13.025 9 13.85 9 15.5 9" color="currentColor"></svg:path>`,
})
export class HugeiconsLaptopVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
