import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsBankPrintIcon],svg[pepicons-bank-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".8"><svg:path d="M9.984 2.168a.5.5 0 0 1 .533 0l7.794 4.909c.424.267.235.923-.267.923H2.456c-.502 0-.691-.656-.267-.923l7.795-4.91Z"></svg:path><svg:path fill-rule="evenodd" d="M10.25 4.364L7.652 6h5.196L10.25 4.364Zm.267-2.196a.5.5 0 0 0-.533 0L2.189 7.077c-.424.267-.235.923.267.923h15.588c.502 0 .691-.656.267-.923l-7.794-4.91ZM1.75 17.5a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2h-15a1 1 0 0 1-1-1ZM4.25 9a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm3 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M10 2.682L3.938 6.5h12.124L10 2.682Zm.267-1.014a.5.5 0 0 0-.533 0L1.939 6.577c-.424.267-.235.923.267.923h15.588c.502 0 .691-.656.267-.923l-7.794-4.91ZM2 17a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 2 17Zm1.5-8.5A.5.5 0 0 1 4 9v6a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5Zm3 0A.5.5 0 0 1 7 9v6a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsBankPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
