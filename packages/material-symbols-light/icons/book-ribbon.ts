import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookRibbonIcon],svg[material-symbols-light-book-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.77q-1.22-.836-2.62-1.283t-2.88-.448q-.78 0-1.534.13q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496V6.831q0-.371.195-.689t.547-.442q.881-.388 1.833-.563T6.5 4.962q1.639 0 2.91.415q1.27.415 2.598 1.233q.236.13.364.35t.128.505v9.854q1.216-.678 2.453-.98t2.547-.3q.9 0 1.618.111t1.267.296q.23.096.423-.029t.192-.394V5.594q.087.029.17.064q.084.034.164.08q.333.145.5.443t.166.65v9.665q0 .614-.516.943q-.517.328-1.1.111q-.694-.27-1.418-.39q-.724-.121-1.466-.121q-1.48 0-2.88.448T12 18.769M15.192 14V4l3.116-1v10z"></svg:path>`,
})
export class MaterialSymbolsLightBookRibbonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
