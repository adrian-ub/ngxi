import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSaveAllIcon],svg[ic-twotone-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11c1.1 0 2-.9 2-2v-9zm2 13H8V8h8.17L19 10.83z"></svg:path><svg:path fill="currentColor" d="M9 9h6v2H9z"></svg:path><svg:circle cx="13.5" cy="15.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M19 10.83V19H8V8h8.17zM9 9h6v2H9zm4.5 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd" opacity=".3"></svg:path><svg:path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h10v2H4v10H2z"></svg:path>`,
})
export class IcTwotoneSaveAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
