import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTagsSolidIcon],svg[bubbles-editor-tags-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6.938V2h4.945c.26.018.51.119.708.289L17.916 12.57l-5.348 5.346L2.292 7.653A1.26 1.26 0 0 1 2 6.938M1.797 0A1.8 1.8 0 0 0 0 1.797v5.174l.002.057a3.26 3.26 0 0 0 .85 2.013L11.3 19.478a1.8 1.8 0 0 0 2.534 0l.002-.003l5.638-5.635l.002-.002a1.797 1.797 0 0 0 0-2.535L9.045.852L9.002.81A3.22 3.22 0 0 0 6.973 0zm2.248 4.854a.636.636 0 1 1 1.273 0a.636.636 0 0 1-1.273 0m.636-2.637a2.636 2.636 0 1 0 0 5.273a2.636 2.636 0 0 0 0-5.273" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorTagsSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
