import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShapesBoldIcon],svg[ph-shapes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.49 60.55a12 12 0 0 0-23 0l-36 120A12 12 0 0 0 24 196h72a12 12 0 0 0 11.49-15.45ZM40.13 172L60 105.76L79.87 172ZM212 74a54 54 0 1 0-54 54a54.06 54.06 0 0 0 54-54m-84 0a30 30 0 1 1 30 30a30 30 0 0 1-30-30m96 70h-88a12 12 0 0 0-12 12v52a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-52a12 12 0 0 0-12-12m-12 52h-64v-28h64Z"></svg:path>`,
})
export class PhShapesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
