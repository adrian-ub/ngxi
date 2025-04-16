import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsPlayIcon],svg[radix-icons-play-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.242 2.322a.5.5 0 0 1 .491-.014l9 4.75a.5.5 0 0 1 0 .884l-9 4.75A.5.5 0 0 1 3 12.25v-9.5a.5.5 0 0 1 .242-.428M4 3.579v7.842L11.429 7.5z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsPlayIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
