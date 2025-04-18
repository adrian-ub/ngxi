import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppNotebookIcon],svg[oui-app-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 2h-5V0h-2v2h-3V0h-2v2h-3V0H8v2H3v26h22zm-2 24H5V4h3v2h2V4h3v2h2V4h3v2h2V4h3z"></svg:path><svg:path d="M27 7v23H8v2h21V7z"></svg:path><svg:path d="M8 12h12v2H8zm0 5h12v2H8z" class="ouiIcon__fillSecondary"></svg:path></svg:g>`,
})
export class OuiAppNotebookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
