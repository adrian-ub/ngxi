import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSelectCheckBoxRoundedIcon],svg[material-symbols-light-select-check-box-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.167q.213 0 .356.143t.144.357t-.144.357t-.356.143H5.616q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173h12.769q.269 0 .442-.173t.173-.443V11.79q0-.214.143-.357t.357-.143t.357.143t.143.357v6.596q0 .67-.472 1.143q-.472.472-1.143.472zm5.928-5.108l8.462-8.461q.14-.14.338-.14t.344.14t.146.344t-.146.35l-8.597 8.598q-.243.242-.566.242t-.565-.242l-3.635-3.634q-.14-.141-.15-.345t.15-.363t.354-.16t.354.16z"></svg:path>`,
})
export class MaterialSymbolsLightSelectCheckBoxRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
