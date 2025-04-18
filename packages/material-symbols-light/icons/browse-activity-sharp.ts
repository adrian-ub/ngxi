import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrowseActivitySharpIcon],svg[material-symbols-light-browse-activity-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 19.462v-1h20.46v1zm1.23-2v-6.5h4.683l2 4h.623L13.95 8.49l1.252 2.47H21v6.5zm7.075-3.99l-1.764-3.51H3v-5.5h18v5.5h-5.183L14.337 7h-.662z"></svg:path>`,
})
export class MaterialSymbolsLightBrowseActivitySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
