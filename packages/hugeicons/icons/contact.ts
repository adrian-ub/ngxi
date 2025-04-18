import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContactIcon],svg[hugeicons-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c-4.007 0-6.01 0-7.255-1.318S3.5 17.242 3.5 13s0-6.364 1.245-7.682S7.993 4 12 4s6.01 0 7.255 1.318S20.5 8.758 20.5 13s0 6.364-1.245 7.682S16.007 22 12 22M8 4V2m8 2V2"></svg:path><svg:path d="M14.018 9.493a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.955 7.223c1.058-1.63 2.739-2.24 3.955-2.239s2.848.61 3.906 2.24c.068.105.087.234.025.344c-.247.439-1.016 1.31-1.57 1.369c-.638.067-2.307.077-2.36.077s-1.772-.01-2.41-.077c-.556-.06-1.324-.93-1.572-1.37c-.061-.109-.042-.238.026-.344"></svg:path></svg:g>`,
})
export class HugeiconsContactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
