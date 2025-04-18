import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiselectRtl16RegularIcon],svg[fluent-multiselect-rtl-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.854 2.854a.5.5 0 0 0-.708-.708L12.5 3.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0zm0 9a.5.5 0 0 0-.708-.708L12.5 12.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0zM1.5 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 4.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 4.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentMultiselectRtl16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
