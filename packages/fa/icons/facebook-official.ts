import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFacebookOfficialIcon],svg[fa-facebook-official-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1451 0q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391V941h199l30-232h-229V561q0-56 23.5-84t91.5-28l122-1V241q-63-9-178-9q-136 0-217.5 80T820 538v171H620v232h200v595H85q-35 0-60-25t-25-60V85q0-35 25-60T85 0z"></svg:path>`,
})
export class FaFacebookOfficialIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
