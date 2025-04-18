import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSendOutlineRoundedIcon],svg[material-symbols-light-send-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.646 12.752l-12.515 5.27q-.404.16-.768-.069Q4 17.723 4 17.289V6.712q0-.435.364-.665q.363-.23.767-.068l12.515 5.269q.49.218.49.752t-.49.752M5 17l11.85-5L5 7v3.885L9.846 12L5 13.116zm0 0V7z"></svg:path>`,
})
export class MaterialSymbolsLightSendOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
