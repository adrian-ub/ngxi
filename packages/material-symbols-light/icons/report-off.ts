import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReportOffIcon],svg[material-symbols-light-report-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.423 21.839l-3.473-3.473L15.327 20H8.673L4 15.316V8.673L5.623 7.05L2.161 3.577l.708-.708l18.262 18.262zm-1.315-5.543L12.5 9.7V7.385h-1V8.7L7.742 4.93L8.673 4h6.654L20 8.673v6.643zM12 16.423q.271 0 .443-.182q.173-.182.173-.433q0-.095-.03-.17q-.028-.077-.086-.134l-.196-.196q-.058-.058-.134-.087t-.17-.029q-.271 0-.443.182t-.172.434t.172.433t.443.182"></svg:path>`,
})
export class MaterialSymbolsLightReportOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
