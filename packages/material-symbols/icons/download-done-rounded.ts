import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDownloadDoneRoundedIcon],svg[material-symbols-download-done-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.55 13.15L18 4.7q.3-.3.713-.3t.712.3t.3.712t-.3.713L10.25 15.3q-.3.3-.7.3t-.7-.3l-4.275-4.275q-.3-.3-.288-.712T4.6 9.6t.713-.3t.712.3zM6 20q-.425 0-.712-.288T5 19t.288-.712T6 18h12q.425 0 .713.288T19 19t-.288.713T18 20z"></svg:path>`,
})
export class MaterialSymbolsDownloadDoneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
