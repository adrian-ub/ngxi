import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorToolbox16Icon],svg[fluent-color-toolbox-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorToolbox160)" d="M5.007 5.5v-1a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v1h-1v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1z"></svg:path><svg:path fill="url(#fluentColorToolbox161)" d="M4 13a2 2 0 0 1-2-2V7.5h12V11a2 2 0 0 1-2 2z"></svg:path><svg:path fill="url(#fluentColorToolbox162)" d="M2 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1H2z"></svg:path><svg:path fill="url(#fluentColorToolbox163)" d="M10.5 7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill="url(#fluentColorToolbox164)" d="M5.5 7a.5.5 0 0 1 .5.5v2.003a.5.5 0 0 1-1 0V7.5a.5.5 0 0 1 .5-.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorToolbox160" x1="2.864" x2="3.212" y1="3" y2="5.176" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox161" x1="1.25" x2="2.524" y1="5.438" y2="18.366" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox162" x1="1.25" x2="1.477" y1="3.875" y2="11.057" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox163" x1="2.857" x2="3.354" y1="7" y2="9.585" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EFEFEF"></svg:stop><svg:stop offset="1" stop-color="#DADADA"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox164" x1="2.857" x2="3.354" y1="7" y2="9.585" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EFEFEF"></svg:stop><svg:stop offset="1" stop-color="#DADADA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorToolbox16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
