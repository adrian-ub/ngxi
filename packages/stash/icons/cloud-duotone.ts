import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCloudDuotoneIcon],svg[stash-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path>`,
})
export class StashCloudDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
