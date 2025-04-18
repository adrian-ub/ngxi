import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRepeatIcon],svg[iconoir-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 17H8c-1.667 0-5-1-5-5s3.333-5 5-5h8c1.667 0 5 1 5 5c0 1.494-.465 2.57-1.135 3.331"></svg:path><svg:path d="M14.5 14.5L17 17l-2.5 2.5"></svg:path></svg:g>`,
})
export class IconoirRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
