import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsXpagesIcon],svg[file-icons-xpages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m297.164 247.455l187.596-187.6h-92.476l-142.478 142.48l-149.541-142.48H5.458l198.096 188.733L0 452.145h92.476l158.435-158.437l166.296 158.437H512z"></svg:path>`,
})
export class FileIconsXpagesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
