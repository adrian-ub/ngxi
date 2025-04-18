import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilMouseSolidIcon],svg[basil-mouse-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.973 2.647a.195.195 0 0 0-.223.195V8.95a.3.3 0 0 0 .3.3h5.15a.29.29 0 0 0 .293-.3c-.14-3.078-2.419-5.813-5.48-6.296zm-1.946 0a.195.195 0 0 1 .223.195V8.95a.3.3 0 0 1-.3.3H5.8a.29.29 0 0 1-.293-.3c.14-3.078 2.419-5.813 5.48-6.296zM5.8 10.75a.3.3 0 0 0-.3.3v3.876a6.5 6.5 0 1 0 13 0V11.05a.3.3 0 0 0-.3-.3z"></svg:path>`,
})
export class BasilMouseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
