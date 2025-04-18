import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatSlashIcon],svg[gg-format-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.526 6.106c.5.233.74.777.537 1.215L9.885 18.424c-.204.438-.775.604-1.276.37c-.5-.233-.74-.778-.536-1.216L13.25 6.476c.204-.438.775-.604 1.276-.37" clip-rule="evenodd"></svg:path>`,
})
export class GgFormatSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
