import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPresentationSolidIcon],svg[iconoir-presentation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.53 17.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L12 19.06l2.97 2.97a.75.75 0 1 0 1.06-1.06zM12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M21.4 18.75a1.35 1.35 0 0 0 1.35-1.35V4.6a1.35 1.35 0 0 0-1.35-1.35H2.6A1.35 1.35 0 0 0 1.25 4.6v12.8c0 .746.604 1.35 1.35 1.35zM9.75 12a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM12 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M15.75 8a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z"></svg:path></svg:g>`,
})
export class IconoirPresentationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
