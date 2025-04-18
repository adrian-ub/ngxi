import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteDropboxSolidIcon],svg[flowbite-dropbox-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.013 6.175L7.006 9.369l5.007 3.194l-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194zM6.981 17.806l5.006-3.193l5.006 3.193L11.987 21z"></svg:path><svg:path d="m12.013 12.545l5.006-3.194l-5.006-3.176l4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194z"></svg:path></svg:g>`,
})
export class FlowbiteDropboxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
