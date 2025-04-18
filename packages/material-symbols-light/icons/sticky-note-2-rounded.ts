import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStickyNote2RoundedIcon],svg[material-symbols-light-sticky-note-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 19l5-5h-4.192q-.344 0-.576.232t-.232.576zm-8.385 1q-.666 0-1.14-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v8.002q0 .332-.13.632t-.349.518l-4.754 4.754q-.217.218-.517.348t-.633.131zm2.77-6.539H11.5q.213 0 .356-.143q.144-.144.144-.357t-.144-.356t-.356-.143H8.385q-.213 0-.357.144t-.143.356t.143.356t.357.144m0-3.962h7.23q.213 0 .357-.144t.144-.357t-.144-.356t-.356-.143H8.385q-.213 0-.357.144t-.143.357t.143.356t.357.143"></svg:path>`,
})
export class MaterialSymbolsLightStickyNote2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
