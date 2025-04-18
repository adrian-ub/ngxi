import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAnsibleIcon],svg[mdi-ansible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.1 15c-.19 0-.34-.1-.55-.27l-5.16-4.17l-1.73 4.34H7.17l4.37-10.51c.11-.28.35-.42.63-.42s.5.14.62.42l3.98 9.58c.04.11.07.22.07.29c-.01.42-.34.74-.74.74m-3.93-8.89l2.59 6.39l-3.91-3.08z"></svg:path>`,
})
export class MdiAnsibleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
