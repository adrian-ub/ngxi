import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorSuperscriptSolidIcon],svg[bubbles-editor-superscript-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.372 2.72a1.6 1.6 0 0 0-.568-.045a1.4 1.4 0 0 0-.51.15a.8.8 0 0 0-.29.238a.35.35 0 0 0-.07.181a1 1 0 0 1-1.998-.112c.025-.45.185-.872.44-1.23a2.8 2.8 0 0 1 .98-.844a3.4 3.4 0 0 1 1.243-.373a3.6 3.6 0 0 1 1.298.105c.42.114.818.308 1.156.58c.338.273.614.624.78 1.036c.168.415.212.866.12 1.307a2.4 2.4 0 0 1-.597 1.148l-2.21 2.472h1.836a1 1 0 1 1 0 2h-4.073a1 1 0 0 1-.745-1.667l3.706-4.143l.01-.011a.44.44 0 0 0 .115-.202a.26.26 0 0 0-.017-.157a.6.6 0 0 0-.18-.225a1.2 1.2 0 0 0-.426-.208M.299 4.286a1 1 0 0 1 1.415.013l4.604 4.69l4.605-4.69a1 1 0 0 1 1.427 1.402l-4.63 4.716l4.63 4.716a1 1 0 0 1-1.427 1.4l-4.605-4.689l-4.604 4.69a1 1 0 1 1-1.428-1.401l4.63-4.716L.287 5.7A1 1 0 0 1 .3 4.286" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorSuperscriptSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
