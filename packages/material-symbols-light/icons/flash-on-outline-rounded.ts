import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlashOnOutlineRoundedIcon],svg[material-symbols-light-flash-on-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.6l3.68-5.33q.097-.154.02-.318t-.27-.163h-2.753l1.5-5.155q.077-.23-.077-.432T13.715 4H10q-.27 0-.442.173q-.173.173-.173.442v6.77q0 .269.173.442T10 12h2zm4.606-4.923l-4.5 6.56q-.131.186-.31.242q-.18.056-.367 0t-.308-.215t-.121-.376V13h-1q-.671 0-1.143-.472t-.472-1.144V4.617q0-.672.472-1.144T10 3h3.83q.686 0 1.125.5q.44.5.259 1.116L14 8.789h1.606q.727 0 1.068.636q.342.637-.068 1.252M12 12H9.385z"></svg:path>`,
})
export class MaterialSymbolsLightFlashOnOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
