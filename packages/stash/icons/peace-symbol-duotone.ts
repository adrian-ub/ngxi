import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPeaceSymbolDuotoneIcon],svg[stash-peace-symbol-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 3.784a8.25 8.25 0 0 0-6.164 12.72l6.164-6.165zm1.5 0v6.555l6.164 6.164a8.25 8.25 0 0 0-6.164-12.72m5.227 13.903L12.75 12.46v7.755a8.23 8.23 0 0 0 5.227-2.529m-6.727 2.53V12.46l-5.227 5.226a8.23 8.23 0 0 0 5.227 2.53M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" opacity=".5"></svg:path>`,
})
export class StashPeaceSymbolDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
