import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderMjmlOpenIcon],svg[material-icon-theme-folder-mjml-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5722" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:rect width="12" height="4" x="14" y="24" fill="#ffccbc" rx="2"></svg:rect><svg:rect width="12" height="4" x="20" y="18" fill="#ffccbc" rx="2"></svg:rect><svg:rect width="12" height="4" x="14" y="12" fill="#ffccbc" rx="2"></svg:rect><svg:circle cx="30" cy="26" r="2" fill="#ffccbc"></svg:circle><svg:circle cx="16" cy="20" r="2" fill="#ffccbc"></svg:circle><svg:circle cx="30" cy="14" r="2" fill="#ffccbc"></svg:circle>`,
})
export class MaterialIconThemeFolderMjmlOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
