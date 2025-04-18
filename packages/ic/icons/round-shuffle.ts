import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundShuffleIcon],svg[ic-round-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.59 9.17L6.12 4.7a.996.996 0 1 0-1.41 1.41l4.46 4.46zm4.76-4.32l1.19 1.19L4.7 17.88a.996.996 0 1 0 1.41 1.41L17.96 7.46l1.19 1.19a.5.5 0 0 0 .85-.36V4.5c0-.28-.22-.5-.5-.5h-3.79a.5.5 0 0 0-.36.85m-.52 8.56l-1.41 1.41l3.13 3.13l-1.2 1.2a.5.5 0 0 0 .36.85h3.79c.28 0 .5-.22.5-.5v-3.79c0-.45-.54-.67-.85-.35l-1.19 1.19z"></svg:path>`,
})
export class IcRoundShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
