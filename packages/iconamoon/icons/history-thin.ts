import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonHistoryThinIcon],svg[iconamoon-history-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"></svg:path><svg:path d="m1 12l2 2l2-2m6-4v5h5"></svg:path></svg:g>`,
})
export class IconamoonHistoryThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
