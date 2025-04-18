import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomPanelCloseIcon],svg[material-symbols-light-bottom-panel-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11.596l3.173-3.192H8.827zM18.384 4q.672 0 1.144.472T20 5.616v12.769q0 .67-.472 1.143q-.472.472-1.143.472H5.615q-.67 0-1.143-.472Q4 19.056 4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4zM19 15V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616V15z"></svg:path>`,
})
export class MaterialSymbolsLightBottomPanelCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
