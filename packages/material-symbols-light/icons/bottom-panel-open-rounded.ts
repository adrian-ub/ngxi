import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomPanelOpenRoundedIcon],svg[material-symbols-light-bottom-panel-open-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.796 11.596h4.406q.275 0 .38-.252t-.09-.449L12.56 8.964q-.237-.237-.56-.237t-.565.242l-1.927 1.927q-.196.196-.095.448t.383.252M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v12.77q0 .666-.475 1.14t-1.14.475zM5 15h14V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616z"></svg:path>`,
})
export class MaterialSymbolsLightBottomPanelOpenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
