import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGmailAddOnIcon],svg[material-symbols-gmail-add-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21v-3h-3v-2h3v-3h2v3h3v2h-3v3ZM4 18q-.825 0-1.412-.587Q2 16.825 2 16V6q0-.825.588-1.412Q3.175 4 4 4h13q.825 0 1.413.588Q19 5.175 19 6v5.075q-.25-.05-.487-.063Q18.275 11 18 11t-.512.012q-.238.013-.488.063V7.4L10.4 12L4 7.425V16h8.075q-.05.25-.063.488Q12 16.725 12 17t.012.512q.013.238.063.488ZM5.45 6l4.95 3.55L15.5 6Z"></svg:path>`,
})
export class MaterialSymbolsGmailAddOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
