import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBlenderIcon],svg[material-symbols-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22q-.825 0-1.412-.587T6 20v-1q0-1.175.513-2.175T7.85 15.15L7.225 11H5q-.825 0-1.412-.588T3 9V5q0-.825.588-1.412T5 3h5V2h4v1h3.975L16.15 15.15q.825.675 1.338 1.675T18 19v1q0 .825-.587 1.413T16 22zM6.925 9l-.6-4H5v4zM12 19q.425 0 .713-.288T13 18t-.288-.712T12 17t-.712.288T11 18t.288.713T12 19m-2.3-5h4.6l1.35-9h-7.3z"></svg:path>`,
})
export class MaterialSymbolsBlenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
