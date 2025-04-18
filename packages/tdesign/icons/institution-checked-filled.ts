import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInstitutionCheckedFilledIcon],svg[tdesign-institution-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 .856l10 5.556V9H1V6.412zM6 11v8H4v-8zm6 0v8h-2v-8zm6 0v6h-2v-6zm4.596 6.94l-5.657 5.656l-3.535-3.535l1.414-1.414l2.121 2.12l4.243-4.242zM1 21h11v2H1z"></svg:path>`,
})
export class TdesignInstitutionCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
