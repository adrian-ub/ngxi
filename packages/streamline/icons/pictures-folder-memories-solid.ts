import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePicturesFolderMemoriesSolidIcon],svg[streamline-pictures-folder-memories-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.177.813A1.46 1.46 0 0 0 5.26.516H1.734A1.457 1.457 0 0 0 .276 1.974v10.053a1.46 1.46 0 0 0 1.458 1.458h10.532a1.46 1.46 0 0 0 1.458-1.458V3.89a1.46 1.46 0 0 0-1.458-1.458H6.912l-.202-.807a1.46 1.46 0 0 0-.533-.811ZM9.86 7.566a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-4.298-.351l5.466 5.02H1.734a.21.21 0 0 1-.208-.208V9.53L4.81 7.215a.595.595 0 0 1 .752 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePicturesFolderMemoriesSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
