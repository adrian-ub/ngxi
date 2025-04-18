import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAudioOpenIcon],svg[material-icon-theme-folder-audio-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></svg:path><svg:path fill="#ffcdd2" d="M31.5 12h-5a.5.5 0 0 0-.5.5v8.055a3.9 3.9 0 0 0-3.232-.357a3.999 3.999 0 0 0 1.856 7.755A4.1 4.1 0 0 0 28 23.847V16h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class MaterialIconThemeFolderAudioOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
