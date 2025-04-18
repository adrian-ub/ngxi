import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNearMeRoundedIcon],svg[material-symbols-light-near-me-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.704 13.258l-5.014-2.03q-.267-.105-.379-.316t-.111-.431t.124-.436t.391-.32l12.03-4.552q.236-.1.463-.038t.392.227t.226.392q.062.227-.038.462l-4.592 12.018q-.101.254-.312.381t-.433.127t-.438-.122t-.319-.387z"></svg:path>`,
})
export class MaterialSymbolsLightNearMeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
