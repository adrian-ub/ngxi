import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderCopyOutlineIcon],svg[material-symbols-light-folder-copy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19.77q-.672 0-1.144-.473Q2 18.825 2 18.154V7.077h1v11.077q0 .269.173.442t.443.173H19v1zm3-3q-.672 0-1.144-.473Q5 15.825 5 15.154V4.616q0-.672.472-1.144T6.616 3h4.961l2 2h6.808q.67 0 1.143.472q.472.472.472 1.144v8.538q0 .671-.472 1.143t-1.144.472zm0-1h13.769q.269 0 .442-.174q.173-.173.173-.442V6.616q0-.27-.173-.443T20.385 6h-7.21l-2-2h-4.56q-.269 0-.442.173T6 4.616v10.538q0 .269.173.442t.443.173m-.616 0V4z"></svg:path>`,
})
export class MaterialSymbolsLightFolderCopyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
