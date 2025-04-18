import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTomlIcon],svg[file-icons-toml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 512H397.47v-56.587h52.667V56.86H397.47V0H512zM375.885 107.743v59.344h-91.161v275.88h-64.107v-275.88h-91.586v-59.344zM0 0h113.963v56.587H61.295V455.14h52.668V512H0z"></svg:path>`,
})
export class FileIconsTomlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
