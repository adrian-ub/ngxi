import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContentCopyRoundedIcon],svg[material-symbols-light-content-copy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.116 17q-.691 0-1.153-.462T7.5 15.385V4.615q0-.69.463-1.153T9.116 3h7.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T16.884 17zm-3 3q-.691 0-1.153-.462T4.5 18.385V7.115q0-.213.143-.356T5 6.616t.357.143t.143.357v11.269q0 .23.192.423t.423.192h8.27q.213 0 .356.143t.143.357t-.143.357t-.357.143z"></svg:path>`,
})
export class MaterialSymbolsLightContentCopyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
