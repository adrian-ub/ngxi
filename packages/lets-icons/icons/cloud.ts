import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudIcon],svg[lets-icons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m8.99 19.982l.075.997zm-.074-.997Q8.71 19 8.5 19v2q.285 0 .565-.021zM8.5 19A5.5 5.5 0 0 1 3 13.5H1A7.5 7.5 0 0 0 8.5 21zM3 13.5A5.5 5.5 0 0 1 8.5 8V6A7.5 7.5 0 0 0 1 13.5zM8.5 8a5.5 5.5 0 0 1 5.038 3.29l1.832-.804A7.5 7.5 0 0 0 8.5 6zm7.5 5a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zm3 3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zm-3 3H9.01v2H16zm-6.99 0a.99.99 0 0 1 .99.99H8c0 .558.452 1.01 1.01 1.01zm4.528-7.71c.393.895 1.28 1.71 2.462 1.71v-2c-.194 0-.47-.149-.63-.514zm-4.473 9.69A.99.99 0 0 1 8 19.991h2c0-.588-.5-1.05-1.084-1.006z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M17.879 12.902A4 4 0 1 0 13 9.016"></svg:path></svg:g>`,
})
export class LetsIconsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
