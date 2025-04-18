import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitOutlineRoundedIcon],svg[material-symbols-splitscreen-portrait-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h6q.425 0 .713-.288T16 17v-3q0-.425-.288-.712T15 13H9q-.425 0-.712.288T8 14v3q0 .425.288.713T9 18m0-7h6q.425 0 .713-.288T16 10V7q0-.425-.288-.712T15 6H9q-.425 0-.712.288T8 7v3q0 .425.288.713T9 11m11 9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4zm-2 0V4H6v16zm0-16H6z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
