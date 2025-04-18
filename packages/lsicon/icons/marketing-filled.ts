import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMarketingFilledIcon],svg[lsicon-marketing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a5.5 5.5 0 0 0-5.5 5.5v1c0 .528.215 1.035.443 1.426c.231.399.509.733.703.928l1.417 1.416L5.64 13h4.72l.577-1.73l1.417-1.416c.194-.195.472-.53.703-.928c.228-.391.443-.898.443-1.426v-1A5.5 5.5 0 0 0 8 1m1.354 4.354l-.708-.708L6.793 6.5l1 1l-1.147 1.146l.708.708L9.207 7.5l-1-1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 15v-1H6v1z"></svg:path>`,
})
export class LsiconMarketingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
