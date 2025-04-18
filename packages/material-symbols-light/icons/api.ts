import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApiIcon],svg[material-symbols-light-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14l-2-2l2-2l2 2zM9.875 8.471L8.183 6.78L12 2.962l3.817 3.817l-1.692 1.692L12 6.346zm-3.096 7.346L2.962 12l3.817-3.817L8.47 9.875L6.346 12l2.125 2.125zm10.442 0l-1.692-1.692L17.654 12l-2.125-2.125l1.692-1.692L21.038 12zM12 21.038l-3.817-3.817l1.692-1.692L12 17.654l2.125-2.125l1.692 1.692z"></svg:path>`,
})
export class MaterialSymbolsLightApiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
