import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWorkHistoryIcon],svg[tdesign-work-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.5h9v4H22V11h-2V8.5H4v11h7v2H2v-15h5.5zm2 4h5v-2h-5zm8.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M12.5 18a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m6.5-2.248v1.834L20.414 19L19 20.414l-2-2v-2.662z"></svg:path>`,
})
export class TdesignWorkHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
