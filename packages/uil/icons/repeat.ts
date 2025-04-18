import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilRepeatIcon],svg[uil-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 17.5H4v-11h7.8l-.8.79a1 1 0 0 0 1.41 1.42l2.5-2.5a1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l.79.79H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.5a1 1 0 0 0 0-2M21 4.5h-2.5a1 1 0 0 0 0 2H20v11h-8.37l.79-.79a1 1 0 0 0 0-1.42a1 1 0 0 0-1.41 0l-2.5 2.5a1 1 0 0 0 0 1.42l2.5 2.5a1 1 0 0 0 1.41-1.42l-.79-.79H21a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
