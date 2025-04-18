import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLastPageRoundedIcon],svg[material-symbols-light-last-page-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.892 12L6.646 7.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l4.388 4.389q.131.13.184.27q.053.138.053.297t-.053.296t-.184.268l-4.388 4.388q-.14.14-.345.15q-.203.01-.363-.15t-.16-.354t.16-.354zm6.109-5.5q.212 0 .356.144T17.5 7v10q0 .213-.144.356t-.357.144t-.356-.144T16.5 17V7q0-.213.144-.356t.357-.144"></svg:path>`,
})
export class MaterialSymbolsLightLastPageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
