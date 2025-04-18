import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardDock20RegularIcon],svg[fluent-keyboard-dock-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm6.755-4.748a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m2.247.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m-8.247-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m.743 3.253a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505m3.757-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0m2.252.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505M9.255 5.252a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0M3.5 2A1.5 1.5 0 0 0 2 3.5v8A1.5 1.5 0 0 0 3.5 13h6v3.293l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L10.5 16.293V13h6a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 16.5 2zm13 10h-13a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class FluentKeyboardDock20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
