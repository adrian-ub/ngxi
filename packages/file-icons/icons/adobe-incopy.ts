import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAdobeIncopyIcon],svg[file-icons-adobe-incopy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h512V0zm198.982 364.218H157.09v-256h41.89zM370.97 214.045c-39.103-15.294-80.498-.433-80.76 54.871c.01 51.564 36.072 70.49 80.76 55.484v37.27c-56.684 18.29-123.103-5.78-123.348-92.754c.219-74.086 58.07-110.679 123.348-93.309z"></svg:path>`,
})
export class FileIconsAdobeIncopyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
