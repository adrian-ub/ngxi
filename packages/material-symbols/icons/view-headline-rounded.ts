import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewHeadlineRoundedIcon],svg[material-symbols-view-headline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.975 15q-.425 0-.7-.288T4 14t.288-.712T5 13h14.025q.425 0 .7.288T20 14t-.288.713T19 15zm0 4q-.425 0-.7-.288T4 18t.288-.712T5 17h14.025q.425 0 .7.288T20 18t-.288.713T19 19zm0-8q-.425 0-.7-.288T4 10t.288-.712T5 9h14.025q.425 0 .7.288T20 10t-.288.713T19 11zm0-4q-.425 0-.7-.288T4 6t.288-.712T5 5h14.025q.425 0 .7.288T20 6t-.288.713T19 7z"></svg:path>`,
})
export class MaterialSymbolsViewHeadlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
