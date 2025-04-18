import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabNew20FilledIcon],svg[fluent-tab-new-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9zm-.25-7a2.75 2.75 0 0 1 2.745 2.582L17 5.75V9.6a5.46 5.46 0 0 0-1.185-.442l-.315-.067V5.75a1.25 1.25 0 0 0-1.122-1.244L14.25 4.5h-8.5a1.25 1.25 0 0 0-1.244 1.122L4.5 5.75v8.5c0 .647.492 1.18 1.122 1.244l.128.006h3.34c.079.424.205.832.375 1.216L9.6 17H5.75a2.75 2.75 0 0 1-2.745-2.582L3 14.25v-8.5a2.75 2.75 0 0 1 2.582-2.745L5.75 3h8.5zm.25 9a.5.5 0 0 0-.492.41L14 12.5V14h-1.5a.5.5 0 0 0-.09.992l.09.008H14v1.5a.5.5 0 0 0 .992.09L15 16.5V15h1.5a.5.5 0 0 0 .09-.992L16.5 14H15v-1.5a.5.5 0 0 0-.5-.5z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentTabNew20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
