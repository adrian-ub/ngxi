import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlassMugIcon],svg[mdi-glass-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4v3h8V4zM8 2h13v1l-1 1v16l1 1v1H7v-1l1-1v-1.4l-3.8-1.77C3.5 16.5 3 15.82 3 15V8a2 2 0 0 1 2-2h3V4L7 3V2zM5 15l3 1.39V8H5z"></svg:path>`,
})
export class MdiGlassMugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
