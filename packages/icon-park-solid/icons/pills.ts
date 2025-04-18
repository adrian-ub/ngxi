import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPillsIcon],svg[icon-park-solid-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPills0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="m9.973 22.062l7.278-6.106l7.277-6.107c4.442-3.727 11.065-3.148 14.793 1.294s3.148 11.066-1.294 14.793l-7.278 6.107l-7.277 6.106c-4.443 3.728-11.066 3.148-14.793-1.294c-3.728-4.442-3.148-11.065 1.294-14.793Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m19.689 21.861l5.737 6.838"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPills0)"></svg:path>`,
})
export class IconParkSolidPillsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
