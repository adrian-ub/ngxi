import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlasterBoldDuotoneIcon],svg[solar-adhesive-plaster-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.213 3.213a4.14 4.14 0 0 0 0 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858L9.07 3.213a4.14 4.14 0 0 0-5.858 0m6.132 5.018A.788.788 0 1 0 8.23 9.345A.788.788 0 0 0 9.345 8.23m2.784.928a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114m3.712 3.712a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.114m.929 3.899a.787.787 0 1 0-1.114-1.114a.787.787 0 0 0 1.114 1.114m-3.713-3.713a.787.787 0 1 0-1.113-1.114a.787.787 0 0 0 1.113 1.114m.928 1.67a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.113M9.16 11.016a.787.787 0 1 1 1.114 1.114a.787.787 0 0 1-1.114-1.114" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.787 9.071a4.142 4.142 0 0 0-5.858-5.858L12 6.143L17.858 12zM12 17.858L6.142 12l-2.929 2.929a4.142 4.142 0 0 0 5.858 5.858z" opacity=".5"></svg:path>`,
})
export class SolarAdhesivePlasterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
