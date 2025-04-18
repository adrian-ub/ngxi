import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAppBlockingOutlineSharpIcon],svg[material-symbols-light-app-blocking-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 15.692q-1.535 0-2.613-1.078q-1.08-1.08-1.08-2.614t1.08-2.613t2.613-1.08t2.614 1.08q1.078 1.079 1.078 2.613t-1.078 2.614q-1.08 1.078-2.614 1.078m0-.884q.454 0 .857-.133t.793-.398l-3.927-3.927q-.265.39-.398.793t-.133.857q0 1.166.821 1.987q.822.82 1.987.82m2.277-1.157q.304-.41.417-.803q.114-.393.114-.847q0-1.165-.822-1.986q-.82-.822-1.986-.822q-.454 0-.857.133t-.793.398zM6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22zm1-2.5V21h10v-1.5zm0-15h10V3H7zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightAppBlockingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
