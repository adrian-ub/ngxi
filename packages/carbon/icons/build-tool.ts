import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBuildToolIcon],svg[carbon-build-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 14h-1V7c0-1.1-.9-2-2-2h-6v2h6v7h-1c-1.1 0-2 .9-2 2v9H9.9c-.4-1.4-1.5-2.5-2.9-2.9V7h6.2l-2.6 2.6L12 11l5-5l-5-5l-1.4 1.4L13.2 5H7c-1.1 0-2 .9-2 2v15.1c-1.7.4-3 2-3 3.9c0 2.2 1.8 4 4 4c1.9 0 3.4-1.3 3.9-3H22v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2M6 28c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m18 0V16h4v12z"></svg:path>`,
})
export class CarbonBuildToolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
