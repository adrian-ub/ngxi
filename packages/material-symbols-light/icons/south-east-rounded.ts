import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSouthEastRoundedIcon],svg[material-symbols-light-south-east-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.292 17L5.354 6.062q-.14-.14-.15-.345q-.01-.203.15-.363t.354-.16t.354.16L17 16.292V9.5q0-.213.144-.356T17.501 9t.356.144T18 9.5v7.692q0 .344-.232.576t-.576.232H9.5q-.213 0-.356-.144T9 17.499t.144-.356T9.5 17z"></svg:path>`,
})
export class MaterialSymbolsLightSouthEastRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
