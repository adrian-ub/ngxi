import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMultiBubbleIcon],svg[iconoir-multi-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.5 22a5.5 5.5 0 1 0-4.764-2.75l-.461 2.475l2.475-.46A5.5 5.5 0 0 0 7.5 22"></svg:path><svg:path d="M15.282 17.898A8 8 0 0 0 18 16.93l3.6.67l-.67-3.6A8 8 0 1 0 6.083 8.849"></svg:path></svg:g>`,
})
export class IconoirMultiBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
