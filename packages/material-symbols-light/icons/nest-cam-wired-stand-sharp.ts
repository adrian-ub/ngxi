import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestCamWiredStandSharpIcon],svg[material-symbols-light-nest-cam-wired-stand-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.385 21.192h-8v-2q0-1.676 1.174-2.838t2.826-1.162q.274 0 .534.035t.529.104l.666-1.042l-2.274-.214q-2.06-.211-3.45-1.735T7 8.75q0-2.071 1.388-3.595T11.84 3.38l5.589-.485v11.721l-2.156-.2l-.025-.019l-.873 1.31q.898.52 1.454 1.432t.555 2.052z"></svg:path>`,
})
export class MaterialSymbolsLightNestCamWiredStandSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
