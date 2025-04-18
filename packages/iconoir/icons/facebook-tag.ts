import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFacebookTagIcon],svg[iconoir-facebook-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></svg:path><svg:path d="M11 21v-9c0-2.187.5-4 4-4m-6 5h6"></svg:path></svg:g>`,
})
export class IconoirFacebookTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
