import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFullscreenPortraitRoundedIcon],svg[material-symbols-fullscreen-portrait-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h6q.425 0 .713-.288T16 17V7q0-.425-.288-.712T15 6H9q-.425 0-.712.288T8 7v10q0 .425.288.713T9 18m11 2q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4z"></svg:path>`,
})
export class MaterialSymbolsFullscreenPortraitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
