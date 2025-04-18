import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderQueueOpenIcon],svg[material-icon-theme-folder-queue-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#b3e5fc" d="M24 16v-2h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2h-2v-8Zm8-2v-2h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-2h-4V14Zm-16 2h2v8h-2z"></svg:path>`,
})
export class MaterialIconThemeFolderQueueOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
