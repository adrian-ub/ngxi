import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayUndo1Icon],svg[subway-undo-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.6 66.8V0L136.7 111.3l113.9 111.3v-66.8c73.7 0 133.6 59.8 133.6 133.6S324.4 423 250.6 423C176.9 423 117 363.2 117 289.4H28C28 412.3 127.7 512 250.6 512c123 0 222.6-99.7 222.6-222.6c0-123-99.6-222.6-222.6-222.6"></svg:path>`,
})
export class SubwayUndo1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
