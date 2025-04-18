import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEastRoundedIcon],svg[material-symbols-east-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.175 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h15.175L14.3 7.1q-.275-.275-.288-.687T14.3 5.7q.275-.275.7-.275t.7.275l5.6 5.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-5.6 5.6q-.275.275-.687.275T14.3 18.3q-.3-.3-.3-.712t.3-.713z"></svg:path>`,
})
export class MaterialSymbolsEastRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
