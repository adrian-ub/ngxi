import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBlindsIcon],svg[material-symbols-light-blinds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-1h2V4h14v15h2v1zM6 7.75h8.25V5H6zm0 3.75h8.25V8.75H6zM6 19h12v-6.5h-2.75v2.248q.292.154.464.414q.17.26.17.588q0 .47-.333.802t-.805.333t-.8-.333t-.33-.802q0-.329.17-.588q.172-.26.464-.414V12.5H6zm9.25-11.25H18V5h-2.75zm0 3.75H18V8.75h-2.75z"></svg:path>`,
})
export class MaterialSymbolsLightBlindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
