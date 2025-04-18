import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPapercutterIcon],svg[whh-papercutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M830 378L505 702q-46 47-110.5 60.5T271 753L0 1024V768l143-143q-24-58-10.5-123T193 390L518 65Q582 0 673.5 0T830 65t65 156.5T830 378M230 598l67 67q7 7 17 7t17-7l86-86l-101-100l-86 86q-6 7-6 16.5t6 16.5m467-332l-67-67q-7-7-17-7t-17 7L479 317l100 100l118-118q7-7 7-17t-7-16"></svg:path>`,
})
export class WhhPapercutterIcon {
  readonly viewBox = input("0 0 895 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
