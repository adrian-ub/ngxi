import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPotionIcon],svg[iconoir-potion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 4h4v2.568c0 .258.17.487.412.579C22.938 10.37 20.908 22 15 22H9c-5.907 0-7.937-11.63.588-14.853a.63.63 0 0 0 .412-.58z"></svg:path><svg:path d="M6 10h12"></svg:path><svg:path stroke-linecap="round" d="M9 2h6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.667 13L10 16h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirPotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
