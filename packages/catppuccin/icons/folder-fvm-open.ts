import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderFvmOpenIcon],svg[catppuccin-folder-fvm-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#c6a0f6" stroke-width=".65" d="M9.868 12.94L7.05 10.203l1.974.003l2.339 2.255c.27.269.27.7 0 .959l-2.3 2.257H7.05zm5.808 2.737v-1.326h-3.738l.013 1.323z"></svg:path><svg:path stroke="#cad3f5" d="m1.873 8l.702-2.74a1.002 1 0 0 1 .961-.76h10.96a1.002 1 0 0 1 .973 1.24l-.22.875M6.009 13.5H2.001A1.503 1.5 0 0 1 .498 12V3.5a1.002 1 0 0 1 1.002-1h5.01a1.002 1 0 0 1 1.002 1v1"></svg:path></svg:g>`,
})
export class CatppuccinFolderFvmOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
