import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVerticalDistributeRoundedIcon],svg[material-symbols-light-vertical-distribute-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21q-.213 0-.356-.144T3 20.499t.144-.356T3.5 20h17q.213 0 .356.144t.144.357t-.144.356T20.5 21zm5-8q-.417 0-.708-.291q-.292-.291-.292-.707t.292-.709T8.5 11h7q.417 0 .708.291q.292.291.292.707t-.292.709T15.5 13zm-5-9q-.213 0-.356-.144T3 3.499t.144-.356T3.5 3h17q.213 0 .356.144t.144.357t-.144.356T20.5 4z"></svg:path>`,
})
export class MaterialSymbolsLightVerticalDistributeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
