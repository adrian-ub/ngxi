import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSystemOkIcon],svg[eos-icons-system-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.004 2.004h-18a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h7v2h-2v2h8v-2h-2v-2h7a2.006 2.006 0 0 0 2-2v-12a2.006 2.006 0 0 0-2-2M10.756 13.67l-4.75-4.75L7.42 7.507l3.336 3.336l5.835-5.836l1.415 1.415Z"></svg:path>`,
})
export class EosIconsSystemOkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
