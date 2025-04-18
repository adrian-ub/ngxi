import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRearCameraSharpIcon],svg[material-symbols-rear-camera-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 8q.425 0 .713-.288T17.5 7t-.288-.712T16.5 6t-.712.288T15.5 7t.288.713T16.5 8M13 19h7V5h-7zM2 21v-8h4.2l-1.6 1.6L6 16l4-4l-4-4l-1.4 1.4L6.2 11H2V3h20v18z"></svg:path>`,
})
export class MaterialSymbolsRearCameraSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
