import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentContract16RegularIcon],svg[fluent-document-contract-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.207 10.5l.647-.646a.5.5 0 1 0-.708-.708l-.646.647l-.646-.647a.5.5 0 1 0-.708.708l.647.646l-.647.646a.501.501 0 0 0 .708.708l.646-.647l.646.647a.5.5 0 1 0 .708-.708zM3.586 1.586A2 2 0 0 1 5 1h3.586a1.5 1.5 0 0 1 1.06.439l2.915 2.915A1.5 1.5 0 0 1 13 5.414V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 .586-1.414M12 11V6H9.5A1.5 1.5 0 0 1 8 4.5V2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1H9.5a.5.5 0 0 1 0-1zM9.5 5h2.293L9 2.207V4.5a.5.5 0 0 0 .5.5"></svg:path>`,
})
export class FluentDocumentContract16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
