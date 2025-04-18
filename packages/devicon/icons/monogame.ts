import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconMonogameIcon],svg[devicon-monogame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e73c00" d="M37.78 0C16.94 0 0 16.968 0 37.78v52.44C0 111.06 16.94 128 37.78 128h52.44c20.84 0 37.78-16.94 37.78-37.78V64.827H52.441v23.117h52.442v2.278c0 8.085-6.577 14.662-14.662 14.662H37.779c-8.085 0-14.662-6.577-14.662-14.662V37.779c0-8.085 6.577-14.662 14.662-14.662s14.662 6.577 14.662 14.662v17.48H75.56V37.78c0-8.085 6.576-14.662 14.662-14.662s14.662 6.577 14.662 14.662v17.48H128V37.78C128 16.94 111.06 0 90.22 0C80.058 0 70.805 4.043 64 10.62C57.196 4.07 47.943 0 37.78 0"></svg:path>`,
})
export class DeviconMonogameIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
