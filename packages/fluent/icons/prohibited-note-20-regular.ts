import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibitedNote20RegularIcon],svg[fluent-prohibited-note-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10q0 .086-.002.17A3 3 0 0 0 17 10a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A6.97 6.97 0 0 0 9 16.929V17c0 .334.055.656.156.956A8.001 8.001 0 1 1 18 10M4.71 14.584l9.874-9.875a7 7 0 0 0-9.874 9.874M12 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm.5 5h4a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1m-.5-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentProhibitedNote20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
