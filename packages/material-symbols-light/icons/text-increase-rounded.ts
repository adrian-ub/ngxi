import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextIncreaseRoundedIcon],svg[material-symbols-light-text-increase-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.194 14.867L2.881 18.16q-.067.157-.189.249q-.12.091-.296.091q-.288 0-.443-.228t-.051-.49l4.9-11.994q.048-.119.16-.204t.242-.084h.357q.149 0 .254.084q.104.085.152.204l4.887 11.943q.104.28-.063.525q-.167.244-.452.244q-.173 0-.322-.097q-.15-.098-.211-.268l-1.308-3.268zm.36-.967h5.584l-2.71-6.8h-.132zm13.83-1.4h-2.5q-.212 0-.356-.144t-.143-.357t.143-.356t.357-.143h2.5V9q0-.213.143-.356t.357-.144t.356.144t.144.356v2.5h2.5q.212 0 .356.144t.143.357t-.143.356t-.357.143h-2.5V15q0 .213-.143.356q-.144.144-.357.144t-.356-.144t-.144-.356z"></svg:path>`,
})
export class MaterialSymbolsLightTextIncreaseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
