import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoWindows2OsSystemMicrosoftIcon],svg[streamline-computer-logo-windows-2-os-system-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 5.82h6.5v-4.5a.49.49 0 0 0-.56-.49L7 1.54Zm-2 0V1.71l-4.06.5a.5.5 0 0 0-.44.5v3.11Zm0 2H.5v3a.51.51 0 0 0 .42.5L5 12Zm2 0v4.4l5.92.95a.5.5 0 0 0 .58-.49V7.82Z"></svg:path>`,
})
export class StreamlineComputerLogoWindows2OsSystemMicrosoftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
