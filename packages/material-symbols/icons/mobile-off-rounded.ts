import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileOffRoundedIcon],svg[material-symbols-mobile-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.8 22.6L1.4 4.2q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.4 18.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275M5 6.425l2 2V18h9.6l2.4 2.4v.6q0 .825-.587 1.413T17 23H7q-.825 0-1.412-.587T5 21zM17 15V6H9.65q-.4 0-.763-.162T8.25 5.4L5.975 3.15q-.575-.575-.213-1.362T7 1h10q.825 0 1.413.588T19 3v12q0 .425-.288.713T18 16t-.712-.288T17 15"></svg:path>`,
})
export class MaterialSymbolsMobileOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
