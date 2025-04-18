import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShieldWatchOutlineIcon],svg[material-symbols-light-shield-watch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615v2.885h-1V6.375l-6-2.23l-6 2.23V11.1q0 3.025 1.7 5.5t4.3 3.3q.31-.108.614-.225q.303-.117.588-.288q.146.194.313.398q.166.205.354.377q-.444.267-.91.461q-.467.194-.959.339m4.384.038l-.325-2.108q-.726-.496-1.143-1.266q-.416-.77-.416-1.645t.416-1.645t1.143-1.267l.325-2.108h3.231l.326 2.108q.726.496 1.143 1.266q.416.77.416 1.646t-.416 1.645t-1.144 1.266L19.616 21zM18 18.48q1.05 0 1.775-.724t.725-1.775t-.725-1.775T18 13.48t-1.775.725t-.725 1.775t.725 1.775T18 18.48"></svg:path>`,
})
export class MaterialSymbolsLightShieldWatchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
