import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureInPictureMobileOutlineRoundedIcon],svg[material-symbols-picture-in-picture-mobile-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4zm-2 0V4H6v16zm0-16H6zm-1 8V6q0-.425-.288-.712T16 5h-4q-.425 0-.712.288T11 6v6q0 .425.288.713T12 13h4q.425 0 .713-.288T17 12m-2-1h-2V7h2z"></svg:path>`,
})
export class MaterialSymbolsPictureInPictureMobileOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
