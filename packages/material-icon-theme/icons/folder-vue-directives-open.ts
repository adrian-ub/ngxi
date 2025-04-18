import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderVueDirectivesOpenIcon],svg[material-icon-theme-folder-vue-directives-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00838f" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#41b883" d="m12 12l10 16l10-15.923V12h-3.889l-6.053 9.641l-6.026-9.64Z"></svg:path><svg:path fill="#35495e" d="m16.03 12l6.027 9.642L28.11 12h-3.647l-2.383 3.795L19.708 12Z"></svg:path>`,
})
export class MaterialIconThemeFolderVueDirectivesOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
