import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataPie24Icon],svg[fluent-color-data-pie-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataPie240)" d="M11 4.784a.75.75 0 0 0-.817-.747a9 9 0 1 0 9.78 9.78a.75.75 0 0 0-.747-.817H11z"></svg:path><svg:path fill="url(#fluentColorDataPie241)" d="M12.728 2.216a.75.75 0 0 1 .544-.212a9 9 0 0 1 8.724 8.724a.75.75 0 0 1-.75.772H13.25a.75.75 0 0 1-.75-.75V2.754a.75.75 0 0 1 .228-.538"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataPie240" x1="19.966" x2="-8.78" y1="22" y2="-6.746" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset=".641" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataPie241" x1="21.205" x2="14.399" y1="9.759" y2="2.004" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataPie24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
