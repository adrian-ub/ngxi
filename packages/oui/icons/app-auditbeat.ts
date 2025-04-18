import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppAuditbeatIcon],svg[oui-app-auditbeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0h2v32h-2z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M0 32h13v-2H2V2h11V0H0zM19 0v2h11v28H19v2h13V0z"></svg:path>`,
})
export class OuiAppAuditbeatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
