import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsClipboardSolidIcon],svg[heroicons-clipboard-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 3A1.5 1.5 0 0 0 9 4.5h6q-.001-.215-.056-.409A1.5 1.5 0 0 0 13.5 3zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678q.745.063 1.486.15c1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93q.74-.086 1.487-.15" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsClipboardSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
