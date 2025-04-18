import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlasterLineDuotoneIcon],svg[solar-adhesive-plaster-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.213 9.071a4.142 4.142 0 0 1 5.858-5.858L20.787 14.93a4.142 4.142 0 0 1-5.858 5.858z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m12 17.858l-2.929 2.929a4.142 4.142 0 0 1-5.858-5.858L6.143 12zm0-11.716l2.929-2.929a4.142 4.142 0 0 1 5.858 5.858L17.857 12z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.841 12.871a.787.787 0 1 1-1.113 1.114a.787.787 0 0 1 1.113-1.114m-3.712-3.712a.788.788 0 1 0-1.114 1.114a.788.788 0 0 0 1.114-1.114m1.856 5.569a.788.788 0 1 1-1.114 1.113a.788.788 0 0 1 1.114-1.113m-3.712-3.713a.788.788 0 1 0-1.114 1.114a.788.788 0 0 0 1.114-1.114m6.497 4.641a.788.788 0 1 1-1.114 1.113a.788.788 0 0 1 1.114-1.113M9.345 8.23A.788.788 0 1 0 8.23 9.345a.788.788 0 0 0 1.114-1.113"></svg:path><svg:path fill="currentColor" d="M13.057 11.944a.787.787 0 1 1-1.113 1.113a.787.787 0 0 1 1.113-1.113" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAdhesivePlasterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
