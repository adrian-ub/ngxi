import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFiverrIcon],svg[arcticons-fiverr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.709 4.5h-7.474c-5.447 0-10.198 4.294-9.88 12.076H7.99v7.245h5.724V43.5h8.498V23.821h8.856V43.5h8.944V16.576H22.748v-1.879a2.805 2.805 0 0 1 2.848-2.951h5.113Z"></svg:path>`,
})
export class ArcticonsFiverrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
