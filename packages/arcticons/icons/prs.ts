import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrsIcon],svg[arcticons-prs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.492 27.954c13.204 0 13.865 15.186 31.694 14.525h2.632v-7.918l-1.31-.011c-17.83.66-18.49-14.525-31.694-14.525l-2.632.01v7.918l2.632.022c13.204 0 13.865-15.186 31.694-14.525l1.31-.011V5.51l-2.632.011c-17.829-.66-18.49 14.525-31.694 14.525"></svg:path>`,
})
export class ArcticonsPrsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
