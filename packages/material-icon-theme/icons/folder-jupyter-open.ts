import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderJupyterOpenIcon],svg[material-icon-theme-folder-jupyter-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9800" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:g fill="#FFE0B2" transform="matrix(.7 0 0 .7 10 10)"><svg:path d="M6.2 18a22.7 22.7 0 0 0 9.8 2a22.7 22.7 0 0 0 9.8-2a10.002 10.002 0 0 1-19.6 0m0-4a22.7 22.7 0 0 1 9.8-2a22.7 22.7 0 0 1 9.8 2a10.002 10.002 0 0 0-19.6 0"></svg:path><svg:circle cx="27" cy="5" r="3"></svg:circle><svg:circle cx="5" cy="27" r="3"></svg:circle><svg:circle cx="5" cy="5" r="3"></svg:circle></svg:g>`,
})
export class MaterialIconThemeFolderJupyterOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
