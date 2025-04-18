import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScannerBarCodeIcon],svg[streamline-scanner-bar-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.11.656H1.208a.49.49 0 0 0-.488.488v3.904m12.686 0V1.144a.49.49 0 0 0-.488-.488H9.014m0 12.688h3.904a.49.49 0 0 0 .488-.488V8.952m-12.687 0v3.904a.49.49 0 0 0 .488.488H5.11m5.696-9.552v6.416M3.194 3.792v6.416m5.709-6.416v4.666m0 1.75v-.291M7 3.792v4.666m0 1.75v-.291M5.097 3.792v4.666m0 1.75v-.291"></svg:path>`,
})
export class StreamlineScannerBarCodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
