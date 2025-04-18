import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDiskOneIcon],svg[icon-park-solid-disk-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDiskOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M12.778 17.012c0-.559.453-1.012 1.012-1.012h21.976c.559 0 1.012.453 1.012 1.012V32c0 6.627-5.373 12-12 12v0c-6.628 0-12-5.373-12-12z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M15.778 4h18v12h-18z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21.778 9v2m6-2v2"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12.778 32h24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h49v48H0z" mask="url(#ipSDiskOne0)"></svg:path>`,
})
export class IconParkSolidDiskOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
