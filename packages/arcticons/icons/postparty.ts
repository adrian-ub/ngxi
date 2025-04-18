import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPostpartyIcon],svg[arcticons-postparty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.149 33.135h9.853c4.04 0 10.482-3.863 10.498-11.104s-5.038-11.655-11.721-12.04H16.127c-5.837 0-10.696 5.411-10.626 12.04s3.986 9.788 9.724 11.104l-1.9 4.874"></svg:path><svg:ellipse cx="17.447" cy="21.74" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.575" ry="2.581"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.526 21.74h5.41"></svg:path>`,
})
export class ArcticonsPostpartyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
