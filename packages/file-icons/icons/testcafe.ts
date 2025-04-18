import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsTestcafeIcon],svg[file-icons-testcafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m317.837 313.07l-17.668 17.547h70.61l70.61 61.5H70.61l70.67-61.5h52.943l-17.667-17.546h-52.943L0 418.467h512L388.447 313.07zm159.725-175.64l-44.14-43.896l-185.418 184.445l-70.612-70.305l-44.139 43.896l114.75 114.2z"></svg:path>`,
})
export class FileIconsTestcafeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
