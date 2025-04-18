import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLandscapeSettingSolidIcon],svg[streamline-landscape-setting-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12.5A1.5 1.5 0 0 0 14 11V3a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 0 3v8a1.5 1.5 0 0 0 1.5 1.5zM7.005 5.462a1.23 1.23 0 1 0-.01 0a2.154 2.154 0 0 0-2.149 2.153v.923h.923L6.077 11h1.846l.308-2.462h.923v-.923a2.154 2.154 0 0 0-2.149-2.153" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLandscapeSettingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
