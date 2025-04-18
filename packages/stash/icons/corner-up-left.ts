import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpLeftIcon],svg[stash-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 20.75a.75.75 0 0 0 .75-.75v-1.434c0-1.651 0-2.937-.084-3.968c-.086-1.047-.262-1.897-.652-2.662a6.75 6.75 0 0 0-2.95-2.95c-.765-.39-1.615-.566-2.662-.652c-1.031-.084-2.317-.084-3.968-.084H5.811l3.72-3.72A.75.75 0 0 0 8.47 3.47l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06-1.06L5.81 9.75h4.59c1.692 0 2.917 0 3.88.08c.954.077 1.585.228 2.104.492a5.25 5.25 0 0 1 2.294 2.295c.264.518.415 1.15.493 2.103c.078.963.079 2.187.079 3.88V20c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
