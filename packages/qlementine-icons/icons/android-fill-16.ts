import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsAndroidFill16Icon],svg[qlementine-icons-android-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 .371a.25.25 0 0 0-.437-.243l-.643 1.16a3.5 3.5 0 0 0-.996-.265c-.195-.022-.428-.022-.892-.022s-.697 0-.892.022a3.5 3.5 0 0 0-.996.265L5.5.128a.25.25 0 1 0-.437.243L5.7 1.52a3.52 3.52 0 0 0-1.65 2.59c-.022.195-.022.428-.022.892h8c0-.464 0-.697-.022-.892a3.49 3.49 0 0 0-1.65-2.59l.637-1.15zm-4.97 3.13a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M1 6a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0zm12 0a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0zM4 6v6a1 1 0 0 0 1 1v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 1-1V6z"></svg:path>`,
})
export class QlementineIconsAndroidFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
