import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWhereToVoteIcon],svg[ic-sharp-where-to-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m-1.53 12l-3.48-3.48L8.4 9.1l2.07 2.07l5.13-5.14l1.41 1.42z"></svg:path>`,
})
export class IcSharpWhereToVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
