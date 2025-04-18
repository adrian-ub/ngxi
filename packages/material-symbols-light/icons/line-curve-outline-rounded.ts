import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineCurveOutlineRoundedIcon],svg[material-symbols-light-line-curve-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 20q-.233 0-.376-.19t-.155-.448q-.046-2.71-1.118-5.085t-2.89-4.155t-4.232-2.874t-5.156-1.237q-.22-.011-.396-.154Q4 5.713 4 5.5t.168-.357t.382-.137q2.962.046 5.57 1.187t4.56 3.084t3.104 4.544t1.191 5.564q.006.252-.118.433T18.5 20"></svg:path>`,
})
export class MaterialSymbolsLightLineCurveOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
