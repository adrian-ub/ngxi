import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCobolOpenIcon],svg[material-icon-theme-folder-cobol-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0288d1" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M23.448 10.106a10 10 0 0 0-2.896 0l-.634 1.653a8.5 8.5 0 0 0-2.273.942l-1.618-.72a10 10 0 0 0-2.047 2.046l.721 1.618a8.5 8.5 0 0 0-.942 2.273l-1.653.634a10 10 0 0 0 0 2.896l1.653.634a8.5 8.5 0 0 0 .942 2.273l-.72 1.618a10 10 0 0 0 2.046 2.047l1.618-.721a8.5 8.5 0 0 0 2.273.942l.634 1.653a10 10 0 0 0 2.896 0l.634-1.653a8.5 8.5 0 0 0 2.273-.942l1.618.72a10 10 0 0 0 2.047-2.046l-.721-1.618a8.5 8.5 0 0 0 .942-2.273l1.653-.634a10 10 0 0 0 0-2.896l-1.653-.634a8.5 8.5 0 0 0-.942-2.273l.72-1.618a10 10 0 0 0-2.046-2.047l-1.618.721a8.5 8.5 0 0 0-2.273-.942ZM22 13.592A6.408 6.408 0 1 1 15.592 20A6.41 6.41 0 0 1 22 13.592"></svg:path><svg:path fill="#b3e5fc" d="M24.607 22.602a3.62 3.62 0 1 1-.006-5.118l.006.006l-1.28 1.278a1.81 1.81 0 1 0-.004 2.56l.004-.004Z"></svg:path>`,
})
export class MaterialIconThemeFolderCobolOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
