import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderForgejoIcon],svg[catppuccin-folder-forgejo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#f5a97f" stroke-width=".65" d="M14.48 8.724a.677.703 0 0 1-.677.703a.677.703 0 0 1-.676-.703a.677.703 0 0 1 .676-.703a.677.703 0 0 1 .677.703m-3.834 5.547v-3.593c0-1.079.841-1.954 1.879-1.954h.601"></svg:path><svg:path stroke="#ed8796" stroke-width=".65" d="M11.33 14.97a.677.703 0 0 1-.677.703a.677.703 0 0 1-.676-.703a.677.703 0 0 1 .676-.703a.677.703 0 0 1 .677.703m3.157-3.59a.677.703 0 0 1-.677.703a.677.703 0 0 1-.676-.703a.677.703 0 0 1 .676-.703a.677.703 0 0 1 .677.703m-3.834 2.89v-.937c0-1.078.841-1.952 1.879-1.952h.601"></svg:path><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2c-.83 0-1.5-.67-1.5-1.5V3.5c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v1"></svg:path></svg:g>`,
})
export class CatppuccinFolderForgejoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
