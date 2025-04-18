import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTagRoundedIcon],svg[material-symbols-light-tag-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.096 15.077l-.921 3.66q-.036.17-.152.255t-.292.085q-.225 0-.371-.183q-.146-.182-.08-.402l.855-3.415H5.16q-.25 0-.406-.186q-.156-.185-.088-.43q.055-.176.186-.28t.308-.104h3.225l1.038-4.154H6.448q-.25 0-.406-.185t-.088-.43q.056-.177.187-.281q.13-.104.307-.104h3.225l.921-3.66q.037-.17.152-.255q.116-.085.293-.085q.225 0 .37.183q.147.183.08.402l-.854 3.415h4.269l.921-3.66q.037-.17.152-.255t.292-.085q.225 0 .372.183q.146.183.078.402l-.854 3.415h2.975q.25 0 .406.186q.156.185.089.43q-.056.177-.187.28t-.308.104h-3.225l-1.038 4.154h2.975q.25 0 .406.186t.088.43q-.055.176-.186.28t-.308.104h-3.225l-.921 3.66q-.037.17-.152.255t-.292.085q-.225 0-.371-.183q-.147-.182-.08-.402l.855-3.415zm.25-1h4.27l1.038-4.154h-4.27z"></svg:path>`,
})
export class MaterialSymbolsLightTagRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
