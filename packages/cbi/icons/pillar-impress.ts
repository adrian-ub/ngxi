import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPillarImpressIcon],svg[cbi-pillar-impress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.36 9.85V2.17c0-.09-.03-.17-.08-.25c-.01-.02-.02-.03-.03-.05a.56.56 0 0 0-.21-.16l-.01-.01l-2.86-1a.47.47 0 0 0-.33 0l-2.87 1l-.01.01c-.09.03-.16.09-.21.16c-.02.01-.02.03-.04.05a.6.6 0 0 0-.08.24v7.68l.01 11.9c0 .21.13.4.33.47l2.87 1.07c.06.02.12.03.17.03q.09 0 .18-.03l2.86-1.07c.2-.07.32-.26.32-.47zm-1-.35l-1.61.6V3.5l1.61-.6zm-3.11-6v6.6l-1.62-.6V2.9z"></svg:path>`,
})
export class CbiPillarImpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
