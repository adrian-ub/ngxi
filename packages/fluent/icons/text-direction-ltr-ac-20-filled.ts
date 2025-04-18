import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionLtrAc20FilledIcon],svg[fluent-text-direction-ltr-ac-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M10 2a.75.75 0 0 1 .75.75V6H12a.75.75 0 0 1 0 1.5h-1.25v3.25a.75.75 0 0 1-1.5 0v-8A.75.75 0 0 1 10 2zM3 3.75A.75.75 0 0 1 3.75 3h4a.75.75 0 0 1 .75.75V5c0 1.078-.212 2.426-.918 3.53c-.737 1.15-1.973 1.97-3.832 1.97a.75.75 0 0 1 0-1.5c1.341 0 2.105-.555 2.568-1.28C6.812 6.95 7 5.923 7 5v-.5H3.75A.75.75 0 0 1 3 3.75zm11.72.47a.75.75 0 0 1 1.06 0l2 2a.748.748 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-1.19a.75.75 0 0 1 0-1.5h1.19l-.72-.72a.75.75 0 0 1 0-1.06zm0 7.5a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H4.75a.75.75 0 0 1 0-1.5h10.69l-.72-.72a.75.75 0 0 1 0-1.06z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTextDirectionLtrAc20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
