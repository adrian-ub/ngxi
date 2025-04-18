import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFigmaIcon],svg[icon-park-solid-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFigma0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path fill="#000" stroke="#000" d="M18 18a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3Zm0 6a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3Zm0 6a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Zm6-15h3a3 3 0 1 1 0 6h-3z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 24a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFigma0)"></svg:path>`,
})
export class IconParkSolidFigmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
