import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPowerSettingsNewIcon],svg[material-symbols-power-settings-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-2.1.788-3.912t2.137-3.163l1.4 1.4q-1.1 1.1-1.712 2.55T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.675-.612-3.125t-1.713-2.55l1.4-1.4q1.35 1.35 2.138 3.163T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-9V2h2v11z"></svg:path>`,
})
export class MaterialSymbolsPowerSettingsNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
