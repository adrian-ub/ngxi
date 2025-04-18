import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPillarImpressShortIcon],svg[cbi-pillar-impress-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.63 2.55q0-.015 0 0a.7.7 0 0 0-.08-.26c-.01-.02-.02-.03-.03-.05a.56.56 0 0 0-.21-.16l-.01-.01L12.18.63a.47.47 0 0 0-.33 0L7.7 2.08l-.01.01a.5.5 0 0 0-.21.15c-.01.02-.02.03-.03.05c-.05.07-.08.16-.08.25v18.81c0 .21.13.4.33.47l4.15 1.54c.06.02.12.03.17.03q.09 0 .18-.03l4.12-1.54c.2-.07.33-.26.33-.47V2.55zM11.14 4.3v10l-2.77-1.03v-10zm4.49 8.97l-2.75 1.03v-10l2.75-1.03z"></svg:path>`,
})
export class CbiPillarImpressShortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
