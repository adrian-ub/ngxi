import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSubdirectoryArrowLeftRoundedIcon],svg[material-symbols-light-subdirectory-arrow-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.921 15.5l3.433 3.433q.146.146.159.344q.012.198-.153.363q-.166.166-.357.166t-.357-.166l-4.08-4.075q-.131-.13-.184-.267T5.329 15t.053-.298t.184-.268l4.086-4.086q.146-.146.344-.153t.364.159q.16.165.162.354t-.162.353L6.92 14.5h9.464q.269 0 .442-.173t.173-.442V5.5q0-.213.143-.357T17.5 5t.357.143T18 5.5v8.385q0 .67-.472 1.143q-.472.472-1.143.472z"></svg:path>`,
})
export class MaterialSymbolsLightSubdirectoryArrowLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
