import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsVscodeIcon],svg[file-icons-vscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M383.998 439.738V0L512 53.247v405.504L384 512L0 382.707zM61.18 299.748L32 290.001l72.036-71.208l-72.034-71.207l29.178-9.744l70.81 53.321l117.602-116.25l70.406 29.929v227.895l-70.41 29.928l-117.602-116.243zm107.502-80.956l80.91 60.928V157.864z"></svg:path>`,
})
export class FileIconsVscodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
