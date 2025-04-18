import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWestRoundedIcon],svg[material-symbols-west-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.825 13H21q.425 0 .713-.288T22 12t-.288-.712T21 11H5.825L9.7 7.1q.275-.275.288-.687T9.7 5.7q-.275-.275-.7-.275t-.7.275l-5.6 5.6q-.15.15-.213.325T2.426 12t.063.375t.212.325l5.6 5.6q.275.275.688.275T9.7 18.3q.3-.3.3-.712t-.3-.713z"></svg:path>`,
})
export class MaterialSymbolsWestRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
