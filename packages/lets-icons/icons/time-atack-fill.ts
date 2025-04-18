import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeAtackFillIcon],svg[lets-icons-time-atack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m.08-15.932C12 5.142 12 5.26 12 5.5v6.211c0 .141 0 .212-.034.27c-.033.058-.094.093-.216.163L6.37 15.25c-.206.12-.31.18-.334.285c-.024.106.04.2.167.389A7 7 0 1 0 12.5 5.018c-.227-.016-.34-.024-.42.05" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsTimeAtackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
