import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAqIndoorIcon],svg[material-symbols-aq-indoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 17q.5 0 .975-.2t.825-.55l.975-.975l-1.05-1.05l-.975.975q-.15.15-.35.213t-.4.062t-.4-.062T13 15.2l-.95-.95q-.35-.35-.825-.537t-.975-.188t-.975.188t-.825.537l-.975.975l1.05 1.05l.975-.975q.15-.15.35-.213t.4-.062t.4.062t.35.213l.95.95q.35.35.825.55t.975.2m0-3q.5 0 .975-.2t.825-.55l.975-.975l-1.05-1.05l-.975.975q-.15.15-.35.213t-.4.062t-.4-.062T13 12.2l-.95-.95q-.35-.35-.825-.537t-.975-.188t-.975.188t-.825.537l-.975.975l1.05 1.05l.975-.975q.15-.15.35-.213t.4-.062t.4.063t.35.212l.95.95q.35.35.825.55t.975.2m0-3q.5 0 .975-.2t.825-.55l.975-.975l-1.05-1.05l-.975.975q-.15.15-.35.213t-.4.062t-.4-.062T13 9.2l-.95-.95q-.35-.35-.825-.537t-.975-.188t-.975.188t-.825.537l-.975.975l1.05 1.05L9.5 9.3q.15-.15.35-.213t.4-.062t.4.063t.35.212l.95.95q.35.35.825.55t.975.2M4 20V8l8-6l8 6v12z"></svg:path>`,
})
export class MaterialSymbolsAqIndoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
