import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoBoldIcon],svg[ph-replit-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-60V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h60v40H72a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-44h60a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20m-84 128H76v-40h56Zm0-128H76V44h56Zm80 64h-56v-40h56Z"></svg:path>`,
})
export class PhReplitLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
