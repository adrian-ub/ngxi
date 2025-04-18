import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderDirenvIcon],svg[catppuccin-folder-direnv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#a6da95" d="M13.5 9.876c0-.729-.72-1.32-1.6-1.32h-.8c-.88 0-1.6.591-1.6 1.32s.72 1.32 1.6 1.32h.8c.88 0 1.6.592 1.6 1.32s-.72 1.32-1.6 1.32h-.8c-.88 0-1.6-.591-1.6-1.32m2-5.016v1.056m0 5.28v1.057"></svg:path></svg:g>`,
})
export class CatppuccinFolderDirenvIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
