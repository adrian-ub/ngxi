import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderAzurePipelinesIcon],svg[catppuccin-folder-azure-pipelines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#b7bdf8" d="M8.5 14v1.5H10m1-5l1.27-2h3.23v3.23l-2 1.77v2h-2L11 15l.75-.75l-2-2L9 13l-.5-.5v-2zm2.5 0"></svg:path></svg:g>`,
})
export class CatppuccinFolderAzurePipelinesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
