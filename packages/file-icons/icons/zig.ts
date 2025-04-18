import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsZigIcon],svg[file-icons-zig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M270.276 194.86H146.401v-61.905h179.17L447.701 88L242.755 318.67H366.92v61.91H187.75L65.615 424zM0 132.957l122.565-.005v61.905H55.127v123.815h82.691l-55.127 61.905H0zm456.868 61.904h-82.69l55.131-61.905H512v247.62l-122.565.004v-61.905h67.433z"></svg:path>`,
})
export class FileIconsZigIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
