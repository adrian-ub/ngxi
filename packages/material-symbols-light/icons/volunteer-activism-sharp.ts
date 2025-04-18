import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVolunteerActivismSharpIcon],svg[material-symbols-light-volunteer-activism-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.385 21h3v-8.154h-3zM14 21.808l7-2.308v-1.577h-7.923l-2.87-.942l.312-.752l2.597.925h3v-1.596l-7.352-2.712h-2.38v6.737zm1.692-9.424l-3.765-3.607q-.66-.635-1.101-1.422q-.441-.788-.441-1.709q0-1.106.77-1.876T13.03 3q.819 0 1.49.443t1.171 1.076q.5-.633 1.172-1.076q.67-.443 1.49-.443q1.106 0 1.876.77T21 5.646q0 .921-.438 1.709t-1.099 1.422z"></svg:path>`,
})
export class MaterialSymbolsLightVolunteerActivismSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
