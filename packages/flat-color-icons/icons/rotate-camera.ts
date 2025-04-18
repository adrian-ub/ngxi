import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRotateCameraIcon],svg[flat-color-icons-rotate-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#5E35B1"><svg:path d="M33.9 12.1H14.2L17.6 7c.4-.6 1-.9 1.7-.9h9.6c.7 0 1.3.3 1.7.9zM14 11H8V9.2C8 8.5 8.5 8 9.2 8h3.6c.7 0 1.2.5 1.2 1.2z"></svg:path><svg:path d="M40 42H8c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4"></svg:path></svg:g><svg:path fill="#E8EAF6" d="M34 25c0-5.5-4.5-10-10-10s-10 4.5-10 10s4.5 10 10 10v-2c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8h-3.5l4.5 5.6l4.5-5.6z"></svg:path>`,
})
export class FlatColorIconsRotateCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
