import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldEditIcon],svg[mdi-shield-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 14.4l-1 1l-2.1-2.1l1-1c.2-.2.6-.2.8 0l1.3 1.3c.2.2.2.5 0 .8M12 19.9l6.1-6.1l2.1 2.1l-6.1 6.1H12zm-2-.8l11-11V5l-9-4l-9 4v6c0 4.8 2.9 9.3 7 11.3z"></svg:path>`,
})
export class MdiShieldEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
