import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderZip20FilledIcon],svg[fluent-folder-zip-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3A2.5 2.5 0 0 0 2 5.5V7h5.086a.5.5 0 0 0 .353-.146L9.5 4.793l-1.28-1.28A1.75 1.75 0 0 0 6.982 3zM2 14.5V8h5.086a1.5 1.5 0 0 0 1.06-.44L10.707 5H12v3.5a.5.5 0 0 0 .5.5h.5v2h-.5a.5.5 0 0 0 0 1h.5v1h-.5a.5.5 0 0 0 0 1h.5v3H4.5A2.5 2.5 0 0 1 2 14.5M14 17h1.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 5H15v3.5a.5.5 0 0 1-.5.5H14v3h.5a.5.5 0 0 1 0 1H14zm0-12h-1v3h1z"></svg:path>`,
})
export class FluentFolderZip20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
