import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBellPlusIcon],svg[mdi-bell-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3M12 2a2 2 0 0 0-2 2a2 2 0 0 0 0 .29C7.12 5.14 5 7.82 5 11v6l-2 2v1h9.35a6 6 0 0 1-.35-2a6 6 0 0 1 6-6a6 6 0 0 1 1 .09V11c0-3.18-2.12-5.86-5-6.71A2 2 0 0 0 14 4a2 2 0 0 0-2-2m-2 19a2 2 0 0 0 2 2a2 2 0 0 0 1.65-.87a6 6 0 0 1-.84-1.13Z"></svg:path>`,
})
export class MdiBellPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
