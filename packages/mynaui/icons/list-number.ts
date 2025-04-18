import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiListNumberIcon],svg[mynaui-list-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 17.5h10M11 12h10M11 6.5h10M3.5 15.455v-.174c0-.777.672-1.406 1.5-1.406h.04c.807 0 1.46.613 1.46 1.368c0 .33-.114.65-.324.912L3.5 19.5h3m-3-14.063l2-.937v5.625"></svg:path>`,
})
export class MynauiListNumberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
