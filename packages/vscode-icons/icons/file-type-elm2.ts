import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeElm2Icon],svg[vscode-icons-file-type-elm2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#34495e" d="m16 15.232l6.051-6.051H9.949zM2.768 2l6.095 6.095h13.248L16.016 2zm14 14l6.624-6.624l6.594 6.593l-6.625 6.625zM30 14.448V2H17.552zM15.232 16L2 2.768v26.464zm8.898 7.362l5.87 5.87v-11.74zM16 16.768L2.768 30h26.464z"></svg:path>`,
})
export class VscodeIconsFileTypeElm2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
