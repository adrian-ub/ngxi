import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHeadsetBoltSolidIcon],svg[iconoir-headset-bolt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.5 13L10 17h4l-2.5 4"></svg:path><svg:path d="M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"></svg:path><svg:path fill="currentColor" d="M2 17.438v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.463a.6.6 0 0 1-.746.582l-1.74-.434A2 2 0 0 1 2 17.438m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582l1.74-.434A2 2 0 0 0 22 17.438"></svg:path></svg:g>`,
})
export class IconoirHeadsetBoltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
