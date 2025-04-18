import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReportRoundedIcon],svg[material-symbols-light-report-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.423q.262 0 .439-.177q.176-.177.176-.438t-.177-.439t-.438-.177t-.438.177t-.177.439t.177.438t.438.177m0-2.961q.214 0 .357-.144t.143-.357V7.885q0-.213-.144-.357t-.357-.143t-.356.143t-.143.357v5.077q0 .212.144.356t.357.144M9.344 20q-.331 0-.632-.13t-.518-.349L4.48 15.806q-.217-.217-.348-.518T4 14.656V9.344q0-.331.13-.632t.349-.518L8.194 4.48q.217-.218.518-.348T9.344 4h5.312q.331 0 .632.13t.518.349l3.715 3.715q.218.217.348.518t.131.632v5.312q0 .331-.13.632t-.349.518l-3.715 3.715q-.217.218-.518.348t-.632.131z"></svg:path>`,
})
export class MaterialSymbolsLightReportRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
