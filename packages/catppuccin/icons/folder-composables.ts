import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderComposablesIcon],svg[catppuccin-folder-composables-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#c6a0f6" d="m12.635 15.154l-.515-.892m.513-.895l-.515.892m1.998-1.998l.276.554a1 1 0 0 1-.894 1.447H12.12m-1.502-5.004l.104-.207a1 1 0 0 1 1.788 0l.608 1.215m-1.119-.071l1.122.067m.615-.932l-.619.938m-2.996 3.994h-.387a1 1 0 0 1-.894-1.447l.776-1.553m.616.934l-.616-.934m-1.117.067l1.117-.067"></svg:path></svg:g>`,
})
export class CatppuccinFolderComposablesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
