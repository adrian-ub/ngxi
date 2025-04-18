import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderFvmIcon],svg[catppuccin-folder-fvm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2c-.83 0-1.5-.67-1.5-1.5V3.5c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v1"></svg:path><svg:path stroke="#c6a0f6" stroke-width=".65" d="m9.871 12.94l-2.818-2.737l1.974.003l2.339 2.255c.27.269.27.7 0 .959l-2.3 2.257H7.053zm5.808 2.737v-1.326h-3.738l.013 1.323z"></svg:path></svg:g>`,
})
export class CatppuccinFolderFvmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
