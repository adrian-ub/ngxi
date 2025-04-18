import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHowToVoteIcon],svg[ic-sharp-how-to-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v6h18v-6zm1.81-5.04L13.45 1.6L5.68 9.36l6.36 6.36zm-6.35-3.55L17 7.95l-4.95 4.95l-3.54-3.54z"></svg:path>`,
})
export class IcSharpHowToVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
