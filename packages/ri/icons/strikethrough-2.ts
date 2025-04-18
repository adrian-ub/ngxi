import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStrikethrough2Icon],svg[ri-strikethrough-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h-2V6H5V4h14v2h-6zm0 6v5h-2v-5zM3 11h18v2H3z"></svg:path>`,
})
export class RiStrikethrough2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
