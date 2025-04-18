import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsJustice24pxIcon],svg[healthicons-justice-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.79 3.744l-4.214.718a3.001 3.001 0 0 0-5.516.94l-5.187.883a1 1 0 0 0 .336 1.972l.226-.039L2 13.495v.22C2 15.873 3.862 17.5 6 17.5s4-1.626 4-3.786v-.22l-2.663-5.77l2-.34A3 3 0 0 0 11 8.828V19H4v2h16v-2h-7V8.83a3 3 0 0 0 1.97-2.406l1.738-.296L14 11.995v.22C14 14.373 15.862 16 18 16s4-1.626 4-3.786v-.22L19.104 5.72l.023-.004a1 1 0 1 0-.336-1.971M18 8.1l-1.437 3.114h2.874zM4.563 12.714L6 9.6l1.437 3.114zM12 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsJustice24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
