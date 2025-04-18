import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiselectRtl24RegularIcon],svg[fluent-multiselect-rtl-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.78 4.78a.75.75 0 0 0-1.06-1.06l-1.97 1.97l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zM2.75 18.007h11.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zm0-6.507h11.5a.75.75 0 0 1 .102 1.493L14.25 13H2.75a.75.75 0 0 1-.102-1.493zm0-6.5h11.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zm19.03 11.72a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.97-1.97a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentMultiselectRtl24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
