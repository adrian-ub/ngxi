import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEjectIcon],svg[iconoir-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 14l-.592-.46A.75.75 0 0 0 5 14.75zm14 0v.75a.75.75 0 0 0 .592-1.21zm-14 .75h14v-1.5H5zm5.619-9.196L4.408 13.54l1.184.92l6.21-7.985zm8.973 7.986l-6.21-7.986l-1.185.921l6.211 7.986zm-7.79-7.065a.25.25 0 0 1 .395 0l1.184-.92a1.75 1.75 0 0 0-2.762 0zM5 17.25a.75.75 0 0 0 0 1.5zm14 1.5a.75.75 0 0 0 0-1.5zm-14 0h14v-1.5H5z"></svg:path>`,
})
export class IconoirEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
