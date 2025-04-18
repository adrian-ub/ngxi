import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAppBlockingOutlineIcon],svg[material-symbols-light-app-blocking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.616 22q-.672 0-1.144-.472T6 20.385V3.615q0-.67.472-1.143Q6.944 2 7.616 2h8.769q.67 0 1.143.472q.472.472.472 1.144v3.307h-1V5.5H7v13h10v-1.423h1v3.307q0 .672-.472 1.144T16.385 22zm0-1h8.769q.23 0 .423-.192t.192-.424V19.5H7v.885q0 .23.192.423t.423.192m9.885-5.308q-1.535 0-2.613-1.078q-1.08-1.08-1.08-2.614t1.08-2.613t2.613-1.08t2.614 1.08q1.078 1.079 1.078 2.613t-1.078 2.614q-1.08 1.078-2.614 1.078m0-.884q.454 0 .857-.133t.793-.398l-3.927-3.927q-.265.39-.398.793t-.133.857q0 1.166.821 1.987q.822.82 1.987.82m2.277-1.157q.304-.41.417-.803q.114-.393.114-.847q0-1.165-.822-1.986q-.82-.822-1.986-.822q-.454 0-.857.133t-.793.398zM7 4.5h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 0V3zM7 21v-1.5z"></svg:path>`,
})
export class MaterialSymbolsLightAppBlockingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
