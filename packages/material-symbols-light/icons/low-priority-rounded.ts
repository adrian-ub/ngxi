import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLowPriorityRoundedIcon],svg[material-symbols-light-low-priority-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.744q0 1.968 1.332 3.339t3.28 1.406h1.134L8.358 15.08q-.14-.14-.15-.344t.15-.364t.353-.16t.354.16l2.049 2.066q.236.238.226.561t-.232.566l-2.043 2.08q-.133.16-.34.16t-.367-.16q-.14-.134-.14-.34q0-.208.14-.368l1.4-1.438H8.623q-2.356-.034-3.99-1.708Q3 14.12 3 11.75q0-2.398 1.653-4.074T8.693 6h2.5q.212 0 .356.144t.143.357t-.144.356t-.356.143h-2.5Q6.737 7 5.368 8.378Q4 9.757 4 11.744M14.577 16.5H20.5q.213 0 .356.144t.144.357t-.144.356t-.356.143h-5.923q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143m0-5.25H20.5q.213 0 .356.144t.144.357t-.144.356t-.356.143h-5.923q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143m0-5.25H20.5q.213 0 .356.144t.144.357t-.144.356T20.5 7h-5.923q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143"></svg:path>`,
})
export class MaterialSymbolsLightLowPriorityRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
