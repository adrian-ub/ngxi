import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInvestmentSelectionSolidIcon],svg[streamline-investment-selection-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.5 13.499v-5.25a1.25 1.25 0 0 1 2.5 0v2.75h2a2 2 0 0 1 2 2v.5"></svg:path><svg:path fill-rule="evenodd" d="M.031 4.424A4.423 4.423 0 1 1 8.676 5.75A2.5 2.5 0 0 0 6.25 8.249v.219A4.423 4.423 0 0 1 .031 4.424m4.423-3.238c.346 0 .625.28.625.625v.283a1.5 1.5 0 0 1 1.077.96a.625.625 0 1 1-1.179.417a.25.25 0 0 0-.232-.164H4.07a.153.153 0 0 0-.032.302l1.027.224a1.497 1.497 0 0 1 .014 2.921v.284a.625.625 0 0 1-1.25 0v-.283a1.5 1.5 0 0 1-1.076-.96a.625.625 0 0 1 1.179-.417a.25.25 0 0 0 .232.164h.581a.247.247 0 0 0 .052-.487L3.771 4.83a1.403 1.403 0 0 1 .058-2.753v-.266c0-.346.28-.625.625-.625M7.5 8.249v5.75H14v-1a2 2 0 0 0-2-2h-2v-2.75a1.25 1.25 0 0 0-2.5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class StreamlineInvestmentSelectionSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
