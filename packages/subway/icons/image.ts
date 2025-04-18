import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayImageIcon],svg[subway-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m349.1 140.6l-69.8 139.6l-46.5-46.5l-46.5 46.5l-46.5-46.5l-46.7 139.7h325.8zM0 1v512h512V1zm465.5 418.9h-419V47.5h418.9v372.4zM139.6 187.2c25.7 0 46.5-20.9 46.5-46.5c0-25.7-20.9-46.5-46.5-46.5S93.1 115 93.1 140.6c0 25.7 20.8 46.6 46.5 46.6"></svg:path>`,
})
export class SubwayImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
