import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLtePlusMobiledataRoundedIcon],svg[material-symbols-light-lte-plus-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 15.5h-3q-.213 0-.356-.144T1.75 15V9q0-.213.144-.356t.357-.144t.356.144T2.75 9v5.5h2.5q.213 0 .356.144t.144.357t-.144.356t-.356.143m3.192 0q-.213 0-.356-.144T7.942 15V9.5h-1.5q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h4q.213 0 .357.144t.143.357t-.143.356t-.357.143h-1.5V15q0 .213-.144.356q-.143.144-.356.144m7.654 0h-3q-.212 0-.356-.144T12.596 15V9q0-.213.144-.356t.356-.144h3q.213 0 .357.144t.143.357t-.143.356t-.357.143h-2.5v2h2.5q.213 0 .357.144t.143.357t-.143.356t-.357.143h-2.5v2h2.5q.213 0 .357.144t.143.357t-.143.356t-.357.143m4.154-3h-1.5q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h1.5V10q0-.213.144-.356t.357-.144t.356.144t.143.356v1.5h1.5q.213 0 .356.144t.144.357t-.144.356t-.356.143h-1.5V14q0 .213-.144.356t-.357.144t-.356-.144T20.25 14z"></svg:path>`,
})
export class MaterialSymbolsLightLtePlusMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
