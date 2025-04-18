import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSnowpackIcon],svg[logos-snowpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M253.964 185.078L138.764 5.88A12.8 12.8 0 0 0 127.998 0a12.8 12.8 0 0 0-10.768 5.88L2.03 185.078a12.8 12.8 0 0 0-.468 13.056a12.8 12.8 0 0 0 11.236 6.664h230.398c4.684 0 8.992-2.556 11.236-6.668a12.79 12.79 0 0 0-.468-13.052M127.997 36.472l34.156 53.127h-34.156l-25.6 25.6l-15.224-15.224z"></svg:path>`,
})
export class LogosSnowpackIcon {
  readonly viewBox = input("0 0 256 205")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
