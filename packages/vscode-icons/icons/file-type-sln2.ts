import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSln2Icon],svg[vscode-icons-file-type-sln2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M23.128 30L11.77 18.955l-6.83 5.202l-2.607-1.312V9.175l2.616-1.324l6.837 5.202L23.127 2l6.54 2.618v22.764z"></svg:path><svg:path fill="#68217a" d="m28.675 5.289l-5.317-2.128L11.866 14.36L4.842 9.016l-1.516.767v12.452l1.507.758l7.016-5.344l11.51 11.19l5.317-2.128V5.289ZM5.591 18.928v-5.847l3.252 2.9zM16 15.986l6.495-4.86v9.756l-6.5-4.9H16Z"></svg:path>`,
})
export class VscodeIconsFileTypeSln2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
